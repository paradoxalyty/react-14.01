import React, { Component } from "react";
import { Chat } from '../components/Chat/Chat'

const BOT_NAME = "chatBot";

export class ChatContainer extends Component {
    state = {
        chats : {
            1: {
                name: 'Anna',
                messages: [
                    {name: "Robot", content: "Hello!"},
                    {name: "Anna", content: "Hi! How are you?"},
                    {name: "Robot", content: "I am well!"},
                ],
            },
            2: {
                name: 'Elena',
                messages: [
                    {name: "Robot", content: "Hello!"},
                    {name: "Elena", content: "Hi! It's interesting to talking with robot for me)"},
                ],
            },
            3: {
                name: 'Olga',
                messages: [],
            },
        }
    }
    timer = null;

    componentDidUpdate () {
        // clearTimeout (this.timer);
        
        // const lastMessage = this.state.messages[this.state.messages.length - 1];
        
        // if (lastMessage.name !== BOT_NAME) {
        //     this.timer = setTimeout(() => this.handleSendMessage ({name: BOT_NAME, content: `Hi, ${lastMessage.name}, I'm a robot!`}), 2000);
        // }
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
        const {chats} = this.state;
        const {id} = this.props.match.params;
        if (id) {
            return <Chat {...{messages: chats[id].messages, onSendMessage: this.handleSendMessage}} />
        } else {
            return "Ошибка: необходимо выбрать номер чата.";
        }
    }
}