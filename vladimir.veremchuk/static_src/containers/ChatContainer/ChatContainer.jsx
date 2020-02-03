import React, { Component } from 'react';
import {Chat} from '../../components/Chat/Chat.jsx';

const ROBOT_NAME = 'Robot';
export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    { name: "ChatBot", content: "Hello! It's ChatBot of room#1!" },
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    { name: "ChatBot", content: "Hello! It's ChatBot of room#2!" },
                ]
            },
            3: {
                name: 'Chat 3',
                messages: [
                    { name: "ChatBot", content: "Hello! It's ChatBot of room#3!" },
                ]
            }
        },
    }

    // тут эпичная починка бота
        componentDidUpdate(prevProps, prevState) {
        const { chats } = this.state;
        const { id } = this.props.match.params;
        if (id && chats[id]){
            if (this.state.chats[id].messages.length != prevState.chats[id].messages.length)  {
            if (prevState.chats[id].messages.length > 1) {
                if (prevState.chats[id].messages.length < this.state.chats[id].messages.length && this.state.chats[id].messages[this.state.chats[id].messages.length -1].name !== "ChatBot" && prevState.chats[id].messages[prevState.chats[id].messages.length -2].name !== "ChatBot") {
                    setTimeout(()=>
            this.handleSendMessage(id)({name: "ChatBot", content: "Ping from ChatBot of room#" + id}),200)
                }
            }else {setTimeout(()=>
                this.handleSendMessage(id)({name: "ChatBot", content: "Ping from ChatBot of room#" + id}),200)}
 }}}

    handleSendMessage = (id) => (message) => {
        this.setState((state) => (
            {
                chats: {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [
                            ...state.chats[id].messages,
                            message,
                        ]
                    },
                }
            }))
    }

    render() {
        const { chats } = this.state;
        const { id } = this.props.match.params;
        if (id && chats[id]) {
            return <Chat {...{ chats: chats, messages: chats[id].messages, onSendMessage: this.handleSendMessage(id) }} />
        } else {
            return <span>Вы не выбрали чат</span>
        }
}
}