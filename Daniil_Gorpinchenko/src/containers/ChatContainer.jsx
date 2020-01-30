import React, {Component} from 'react';
import { Chat } from '../components/Chat/Chat';

const robotName = 'Robot';
export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Ivan", content: "Hello!"},
            {name: "Oleg", content: "Hi! How are you?"},
            {name: "Ivan", content: "Im fine!"}
        ],
    }

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length-1];

        if(lastMessage.name !== robotName){
            setTimeout(() => this.hendleSendMessage({name: robotName, content: "Hi, I'm Robot!"}), 2000);
        }
    }

    hendleSendMessage = (message) =>{
        this.setState((state) => ({messages: [...state.messages, message]}))
    }


    render () {
        const {messages} = this.state;
        
        return <Chat {...{messages, onSendMessage: this.hendleSendMessage}}/>
    }
}