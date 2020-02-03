import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import PropTypes from 'prop-types';


const ROBOT_NAME = 'Robot';



export class ChatContainer extends Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    }
    //

    state = {
        chats: {
            1: {
                name: 'chat1',
                messages: [
                    { name: 'Vlad', content: 'Hay!' },
                    { name: 'Vlad', content: 'How are you?' }
                ]
            },
            2: {
                name: 'chat2',
                messages: [
                    { name: 'Olga', content: 'Hay!' },
                    { name: 'Olga', content: 'How are you?' }
                ]
            },
            3: {
                name: 'chat3',
                messages: [
                    { name: 'Platon', content: 'Hay!' },
                    { name: 'Platon', content: 'How are you?' }

                ]
            }
        },
    };


    componentDidUpdate() {
        const { chats } = this.state;
        const { id } = this.props.match.params;
        if (id && chats[id]) {
            const messages = this.state.chats[id].messages;
            const lastMessage = messages[messages.length - 1];
            if (lastMessage && lastMessage.name !== ROBOT_NAME) {

                setTimeout(() => this.handleSendMessage(id)({ name: ROBOT_NAME, content: 'Отличное сообщение! its chat' + id }), 2000)
            }
        }
    }

    handleSendMessage = (id) => (message) => {
        this.setState((state) => ({
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        message,
                    ]
                },
            }
        }))
    }

    render() {
        const { chats } = this.state;
        const { id } = this.props.match.params;
        if (id && chats[id]) {
            return <Chat {...{ messages: chats[id].messages, onSendMessage: this.handleSendMessage(id) }} />
        }
    }
}
