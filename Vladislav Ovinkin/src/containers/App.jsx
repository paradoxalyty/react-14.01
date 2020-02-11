import React, { Component } from "react";
// import { Layout } from '../components/Layout/Layout';
import {Router} from "../components/Router/Router";
import {initStore} from '../store/store';
import {Provider} from 'react-redux';

const store = initStore ();
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
        activeId: 3,
    }

    componentWillUnmount () {
        console.log ('App unmount');
    }

    handleSendMessage = (id) => (message) => {
        const date = new Date ();
        const time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    
        this.setState ((state) => (
            {
                chats: {...state.chats, 
                    [id]: { name: state.chats[id].name,
                            messages: [...state.chats[id].messages, message]
                    },
                }
            }
        ));
        // console.log (id, this.state);
    }
    
    handleChangeId = (newId) => {
        this.setState (() => ({
            activeId: newId,
        }))
    }

    handleChatAdd = (name) => {
        const chatsId = Object.keys (this.state.chats);
        const newChatId = Math.max.apply(null, chatsId) + 1;
        // console.log("name=" + name, "newChatId=" + newChatId);
        this.setState ((state) => (
            {
                chats: {...state.chats, 
                    [newChatId]: { name: name,
                            messages: []
                    },
                },
                activeId: newChatId,
            }
        ));
    
        // console.log (this.state);
    }

    render () {
        const {chats, activeId} = this.state;
        // const {id} = this.props.match.params;
    
        return (
            <Provider store={store}>
                <Router chatList={chats} stateId={activeId} onChangeId={this.handleChangeId} onSendMessage={this.handleSendMessage(activeId)} onChatAdd={this.handleChatAdd} />
            </Provider>
        );
    };
}