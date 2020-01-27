import React from 'react';
import { Message } from './Message';

const userName = "CurrentUser"
const chatBotName = "ChatBot";
const defaultChatBotAnswer = `Hey! Don't bother me, ${userName}`

export default class MessageList extends React.Component {
    state = {
        messages: [
            {name: "Ivan", content: "Hello!"},
            {name: "NeIvan", content: "Hehehe"},
        ]
    };

    handleClick = () => {
        const sendMessageField = document.getElementById('send-message-field');
        this.setState(({ messages }) => ({
            messages: [...messages, {name: {userName}, content: {sendMessageField}}]
        }));
    };

    componentDidUpdate() {
        const messages = this.state.messages;
        if (messages[messages.length - 1].name !== chatBotName) {
            setTimeout(() => {
                this.setState(({ messages }) => ({
                     messages: [ ...messages, 
                        {name: {chatBotName}, content: {defaultChatBotAnswer}}]
                 }))
            }, 500);
        }
    };
    render() {
        const messagesList = this.state.messages.map((message, index) => <Message {...message} key={index}/>);
        return (
            <>
                { messagesList }
                <input type="text" placeholder="New message" id="send-message-field"/>
                <input type="submit" value="New message" />
            </>
        )
    }    
} 