import React, { Component } from "react";
import { Router } from '../components/Router/Router';

const BOT_NAME = "chatBot";
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
    timer = null;
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
    // componentDidUpdate (prevProps, prevState) {
    componentDidUpdate () {
        console.log ("App update!");
        const id = this.state.currentChatId;
        const {chats} = this.state;
        // const {onSendMessage} = this.props;
        clearTimeout (this.timer);
        
        console.log (id);

        if (chats[id]) {
            const lastMessage = chats[id].messages[chats[id].messages.length - 1];
        
            if (lastMessage && lastMessage.name !== BOT_NAME) {
                this.timer = setTimeout(() => this.handleSendMessage(id) ({name: BOT_NAME, content: `Hi, ${lastMessage.name}, I'm a robot!`}), 2000);
            }
        }
    }
    componentWillUnmount () {
        console.log ("App unmount!");
        clearTimeout (this.timer);
    }
    render () {
        const id = this.state.currentChatId;
        const {chats} = this.state;
        const {currentChatId} = this.state;
        console.log ('App render');
        return (
            <Router chatList={chats} activeChatId={currentChatId} onChatChange={this.handleChatChange} onSendMessage={this.handleSendMessage(id)} />
        );
    };
}