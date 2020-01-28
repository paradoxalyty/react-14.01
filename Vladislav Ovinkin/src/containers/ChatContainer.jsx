import React, { Component } from "react";
import { Chat } from '../components/Chat/Chat'

const BOT_NAME = "chatBot";

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Kolya", content: "Hello!"},
            {name: "Olya", content: "Hi! How are you?"},
            {name: "Kolya", content: "I am well"},
        ],
    }
    timer = null;

    componentDidUpdate () {
        clearTimeout (this.timer);
        
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        
        if (lastMessage.name !== BOT_NAME) {
            this.timer = setTimeout(() => this.handleSendMessage ({name: BOT_NAME, content: `Hi, ${lastMessage.name}, I'm a robot!`}), 2000);
        }
    }
    
    componentWillUnmount () {
        clearTimeout (this.timer);
    }

    handleSendMessage = (message) => {
        const date = new Date ();
        const time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        message.time = time;
        this.setState ((state) => ({messages: [...state.messages, message]}));
    }

    render () {
        const {messages} = this.state;

        return <Chat {...{messages, onSendMessage: this.handleSendMessage}} />
    }
}