import React, { Component } from 'react';
import { MessageField } from './MessageField';
import '../style.css';
import { ChatForm } from './ChatForm';

export class Chat extends Component {
    state = {
        messages: [],
        input: ''
    }
    constructor(props) {
        super(props);
    }
    sendMessage = (message) => {
        const amessage = {sender: "dog", text: "bork"};
        this.setState(({ messages }) => ({
            messages: [...messages, amessage],
        }));
    }
    componentDidUpdate(prevState) {
        if (this.state.messages[this.state.messages.length - 1].name !== "robot") {
            const message = { name: "robot", text: "bzz" };
            setTimeout(() => {
                this.setState(({ messages }) => ({
                    messages: [...messages, message]
                }))
            }, 1000);
        }
    }
    render() {
        return <div className="chat--form">
            <MessageField className="message-field" messages={this.state.messages} />
            <ChatForm messageHandler={this.sendMessage}/>
        </div>
    }
}