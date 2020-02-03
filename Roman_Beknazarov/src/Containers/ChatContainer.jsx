import React, {Component} from 'react';
import {MessageField} from '../components/MessageField/MessageField';

const ROBOT_NAME = 'Robot';

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    {author: "Bot", content: "Hello!"},
                    {author: "Bot", content: "It's chat one."},
                    {author: "Bot", content: "Hi, how are You?"}
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {author: "Robot", content: "Hi!"},
                    {author: "Robot", content: "It's chat two"}
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            }
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {chats} = this.state;
        const {id} = this.props.match.params;
        if (id && chats[id]) {
            const messages = this.state.chats[id].messages;
            const lastMessage = messages[messages.length - 1];

            if (lastMessage && lastMessage.author !== ROBOT_NAME) {
                this.handleSendMessage(id)({author: ROBOT_NAME, content: "Don't bother me I'm a robot."});
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
        }));
    };

    render() {
        const {chats} = this.state;
        const {id} = this.props.match.params;
        if (id && chats[id]) {
            return <MessageField {...{messages: chats[id].messages, onSendMessage: this.handleSendMessage(id)}}/>
        } else {
            return <span>404</span>
        }
    }
}