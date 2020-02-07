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
    
    render () {
        const {chats} = this.state;
        const {id} = this.props.match.params;
    
        return (
            <Layout chatList={chats} id={id} onSendMessage={this.handleSendMessage(id)} />
        );
    };
}