import React, {Component} from "react";
import {Chat} from "../components/Chat/Chat";

export class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {name: 'Ivan', content: 'Hello!'},
                {name: 'Oleg', content: 'Hi!'},
                {name: 'Ivan', content: 'Bye!'},
            ],
        }
    }
    handleSentMessage(message) {
        this.setState((state) => ({messages: [...state.messages, message]}))
    }

    render() {
        const {messages} = this.state;
        return <Chat {...{messages, onSentMessage: this.handleSentMessage.bind(this)}}/>
    }
}
