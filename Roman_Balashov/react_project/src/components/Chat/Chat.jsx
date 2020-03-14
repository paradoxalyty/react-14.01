import React, { Component } from 'react';
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from '../ChatForm/ChatForm';
import './Chat.css';
import { InstallPopup } from '../InstallPopup/Popup';

export class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {messages, sendMessage} = this.props;
        return <div className="chat">
            <MessageField messages={messages} />
            <ChatForm sendMessage={sendMessage} />
            {/* <InstallPopup /> */}
        </div>
    }
}