import React, { Component } from "react";
import { Router } from '../components/Router/Router';
export class App extends Component {
    state = {
        chats : {
            1: {
                name: 'Anna',
                messages: [
                    {name: "chatBot", content: "Hello!"},
                    {name: "Anna", content: "Hi! How are you?"},
                    {name: "chatBot", content: "I am well!"},
                ],
            },
            2: {
                name: 'Elena',
                messages: [
                    {name: "chatBot", content: "Hello!"},
                    {name: "Elena", content: "Hi! It's interesting to talking with robot for me)"},
                ],
            },
            3: {
                name: 'Olga',
                messages: [],
            },
        },
        currentChatId: 1,
    }
    handleChatChange = (newId) => {
        this.setState (() => ({currentChatId: newId}));
    }
    componentDidMount () {
        // const {id} = this.props.match.params;
    }

    handleSendMessage = (id) => (message) => {
        const date = new Date ();
        const time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        // message.time = time;
        this.setState ((state) => (
            {
                chats: {...state.chats, 
                    [id]: { name: state.chats[id].name,
                            messages: [...state.chats[id].messages, message]
                    },
                }
            }
        ));
        console.log (id, this.state);
    }
    componentDidUpdate (prevProps, prevState) {
        
    }
    render () {
        const id = this.state.currentChatId;
        const {chats} = this.state;
        const {currentChatId} = this.state;
        return (
            <Router chatList={chats} activeChatId={currentChatId} onChatChange={this.handleChatChange} onSendMessage={this.handleSendMessage(id)} />
        );
    };
}