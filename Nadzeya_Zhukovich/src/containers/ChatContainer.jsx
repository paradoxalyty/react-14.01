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
            dictionary: [
                {userMessage: 'Hello', answer: 'Hi! How are you?'},
                {userMessage: 'Ok', answer: 'It is great!'},
                {userMessage: 'Bye', answer: 'Bye!'},
            ]
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            const lastMessage = this.state.messages[this.state.messages.length -1];
            if(lastMessage.name !== ROBOT_NAME) {
                const lastUserAnswer = lastMessage.content;
                const robotAnswer = this.robotAnswer(lastUserAnswer, 'I do not understand you.');
                this.handleSentMessage({name: ROBOT_NAME, content: robotAnswer})
            }
        }, 2000);
    }

    handleSentMessage(message) {
        this.setState((state) => ({messages: [...state.messages, message]}))
    }

    robotAnswer(userMessage, defaultMessage) {
        const robotAnswer = this.state.dictionary.filter(data => data.userMessage.toLowerCase() === userMessage.toLowerCase());
        return robotAnswer.length > 0 ? robotAnswer[0].answer : defaultMessage;
    }

    render() {
        const {messages} = this.state;
        return <Chat {...{messages, onSentMessage: this.handleSentMessage.bind(this)}}/>
    }
}
