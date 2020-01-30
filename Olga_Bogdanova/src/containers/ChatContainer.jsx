import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';


const ROBOT_NAME = 'Robot';

export class ChatContainer extends Component {
    state = {
        messages: [
            { name: 'Robot', content: 'Отправь мне сообщение!' }
        ]
    };

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        var complite = false;

        if (lastMessage.name !== ROBOT_NAME) {
            setTimeout(() => this.handleSendMessage({ name: ROBOT_NAME, content: 'Отличное сообщение!' }), 2000)
        }
    }

    handleSendMessage = (message) => {
        this.setState((state) => ({ messages: [...state.messages, message] }),
        )
    }

    render() {
        const { messages } = this.state;
        console.log(this.props)
        return <Chat {...{ messages, onSendMessage: this.handleSendMessage }} />
    }
}