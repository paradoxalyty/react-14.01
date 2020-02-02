import React, { Component } from 'react';
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from '../ChatForm/ChatForm';
import './Chat.css';

export class Chat extends Component {
    state = {
        chats: {
            1: {
                name: "Chat 1",
                messages: [
                    {name: "Cat", text: "meow"},
                    {name: "Cow", text: "Moo"}
                ],
            },
            2: {
                name: "Chat 2",
                messages: [
                    {name: "Pig", text: "whee"},
                    {name: "Cow", text: "Moo"}],
            },
            3: {
                name: "Chat 3",
                messages: [],
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
        // if (this.state.messages[this.state.messages.length - 1].name !== "robot") {
        //     const message = { name: "robot", text: "bzz" };
        //     setTimeout(() => {
        //         this.setState(({ messages }) => ({
        //             messages: [...messages, message]
        //         }))
        //     }, 1000);
        // }
    }
    render() {
        const { chats } = this.state;
        const { id } = this.props.match.params;

        if (id && chats[id]) {
            return <div className="chat">
                <MessageField messages={chats[id].messages} />
                <ChatForm {...{sendMessage: this.sendMessage(id)}} />
            </div>
        } else {
            <span>Не найдено</span>
        }
    }
}