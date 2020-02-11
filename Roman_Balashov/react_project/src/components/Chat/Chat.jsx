import React, { Component } from 'react';
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from '../ChatForm/ChatForm';
import './Chat.css';

export class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="chat">
            <MessageField messages={this.props.messages} />
            <ChatForm sendMessage={this.props.sendMessage} />
        </div>
    }
}