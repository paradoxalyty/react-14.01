import React, { Component } from 'react';
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from '../ChatForm/ChatForm';
import './Chat.css';

export class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {messages, sendMessage} = this.props;
        return <div className="chat">
            <MessageField messages={messages} />
            <ChatForm sendMessage={sendMessage} />
        </div>
    }
}