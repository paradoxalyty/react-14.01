import React, { Component } from "react";
import { Chat } from '../components/Chat/Chat'

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Kolya", content: "Hello!"},
            {name: "Olya", content: "Hi! How are you?"},
            {name: "Kolya", content: "I am well"},
        ],
    }

    handleSendMessage = (message) => {
        this.setState ((state) => ({messages: [...state.messages, message]}));
    }

    render () {
        const {messages} = this.state;

        return <Chat {...{messages, onSendMessage: this.handleSendMessage}} />
    }
}