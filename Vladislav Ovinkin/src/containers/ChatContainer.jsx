import React, { Component } from "react";
import { Chat } from '../components/Chat/Chat'

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Kolya", content: "Hello!"},
            {name: "Olya", content: "Hi! How are you?"},
            {name: "Kolya", content: "I am well"},
        ],
        inputMessage: '',
        inputName: '',
    }

    render () {
        const {messages} = this.state;

        return <Chat {...{messages, message: inputMessage, name: inputName}} />
    }
}