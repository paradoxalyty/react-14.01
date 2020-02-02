import React, { Component } from 'react';
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from '../ChatForm/ChatForm';
import './Chat.css';

export class Chat extends Component {
    state = {
        chats: {
            1: {
                id: 1,
                name: "Chat 1",
                messages: [
                    { name: "Jane", text: "Hi!" },
                    { name: "Jane", text: "How are you?" }
                ],
            },
            2: {
                id: 2,
                name: "Chat 2",
                messages: [
                    { name: "Jack", text: "Hey" },
                ]
            },
            3: {
                id: 3,
                name: "Chat 3",
                messages: [
                    { name: "John", text: "What's up!" },],
            }
        }
    };
    constructor(props) {
        super(props);
    }
    sendMessage = (id) => (message) => {
        this.setState((state) => ({
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        message
                    ]
                },
            }
        }));
    };
    componentDidUpdate() {
        const { chats } = this.state;
        const { id } = this.props.match.params;
        if (id && chats[id]) {
            const messages = this.state.chats[id].messages;
            const lastMessage = messages[messages.length - 1];

            if (lastMessage && lastMessage.name !== "robot") {
                this.setState((state) => {
                    setTimeout(() => this.sendMessage(id)({ name: "robot", text: "Bzz, it's robot. You are in chat #" + id }), 1000);
                });

            }
        }
    }
    render() {
        const { chats } = this.state;
        const { id } = this.props.match.params;

        if (id && chats[id]) {
            return <div className="chat">
                <MessageField messages={chats[id].messages} />
                <ChatForm {...{ sendMessage: this.sendMessage(id) }} />
            </div>
        } else {
            <span>Не найдено</span>
        }
    }
}