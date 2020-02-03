import React, { Component } from "react";
import { Layout } from '../components/Layout/Layout';

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
    }
    componentDidUpdate (prevProps, prevState) {
        
    }
    render () {
        const {id} = this.props.match.params;
        const {chats} = this.state;
        const {currentChatId} = this.state;
        return (
            <Layout {...{chatList: chats, activeChatId: currentChatId, id: id, onChatChange: this.handleChatChange}} />
        );
    };
}