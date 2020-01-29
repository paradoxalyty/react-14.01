import React, { Component } from 'react';
import { MessageField } from './MessageField';
import { ChatForm } from './ChatForm';
import '../style';

export class Chat extends Component {
    state = {
        messages: [],
    };
    constructor(props) {
        super(props);
    }
    sendMessage = (message) => {
        this.setState(({ messages }) => ({
            messages: [...messages, message],
        }));
    };
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
        return <div className="chat">
            <MessageField messages={this.state.messages} />
            <ChatForm sendMessage={this.sendMessage} />
        </div>
    }
}