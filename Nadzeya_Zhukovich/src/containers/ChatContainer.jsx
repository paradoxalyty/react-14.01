import React, {Component} from "react";
import {Chat} from "../components/Chat/Chat";

const ROBOT_NAME = 'Robot';
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

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length -1];
        if(lastMessage.name !== ROBOT_NAME) {
            setTimeout(() => this.handleSentMessage({name: ROBOT_NAME, content: 'Hi I am robot!'}), 3000)

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
