import React, {Component} from 'react';
import { Chat } from '../components/Chat/Chat';

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Ivan", content: "Hello!"},
            {name: "Oleg", content: "Hi! How are you?"},
            {name: "Ivan", content: "Im fine!"}
        ],
    }

    hendleSendMessage = (message) =>{
        this.setState((state) => ({messages: [...state.messages, message]}))
    }


    render () {
        const {messages} = this.state;
        
        return <Chat {...{messages, onSendMessage: this.hendleSendMessage}}/>
    }
}