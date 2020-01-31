import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat'

const ROBOT_NAME = 'Robot';
export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    { name: "Ivan", content: "Hello! It's chat one!" },
                    { name: "Ivan", content: "How are you?" },
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    { name: "Den", content: "Hi from chat 2" },
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            }
        },
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        const { chats } = this.state;
        const { id } = this.props.match.params;
        if (id && chats[id]) {
            const messages = this.state.chats[id].messages;
            const lastMessage = messages[messages.length - 1];

            if (lastMessage && lastMessage.name !== ROBOT_NAME) {
                setTimeout(() => this.handleSendMessage(id)({ name: ROBOT_NAME, content: "Hi, I'm robot! it's chat " + id }), 2000)
            }
        }



    }

    handleSendMessage = (id) => (message) => {
        this.setState((state) => (
            {
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
        } else {
            return <span>Вы не выбрали чат</span>
        }
    }
}