import React, { Component } from 'react';

import { Chat } from '../components/Chat/Chat'

const ROBOT_NAME = 'Robot';
export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat_One',
                messages: [
                    { name: "Ivan", content: "work: chat one" }              
                ]
            },
            2: {
                name: 'Chat_Two',
                messages: [
                    { name: "Ivan", content: "work: chat two" },
                    { name: "Oleg", content: "work: chat two" },
                ]
            },
            3: {
                name: 'Chat_Three',
                messages: [
                    { name: "Ivan", content: "work: chat three" },
                    { name: "Oleg", content: "work: chat three" },
                    { name: "Ivan", content: "work: chat three" }
                ]
            },
            4: {
                name: 'Chat_Four',
                messages: [
                    { name: "Ivan", content: "work: chat four" },
                    { name: "Oleg", content: "work: chat four" },
                    { name: "Ivan", content: "work: chat four" },
                    { name: "Oleg", content: "work: chat four" }
                ]
            },
        }
    }

    componentDidMount() {

    };

    componentDidUpdate() {
        const {chats} = this.state;
        const {id} = this.props.match.params;
        if(id && chats[id]) {
            const messages = this.state.chats[id].messages;
            const lastMessage = messages[messages.length -1];
            if(lastMessage && lastMessage.name !== ROBOT_NAME) {
                setTimeout(() => this.handleSendMessage(id)({ name: ROBOT_NAME, content: 'Hi im Robot ' + id }), 2000);
            }
        }
    };
    /**
     *  
     */
    handleSendMessage = (id) => (message) => {
        this.setState((state) => ({ 
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        message,
                    ]
                }
        }}))
    };

    render() {                                                                                                                                                                                     
        const { chats } = this.state;
        const {id} = this.props.match.params;
        if(id && chats[id]) {
            return <Chat { ...{chats: chats, messages: chats[id].messages, onSendMessage: this.handleSendMessage(id) }}/>
        } else {
            return <span>Вы не выбрали чат</span>
        };
    };
};
