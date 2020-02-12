import React, { Component } from "react";
import { Router } from "../components/Router/Router";
import { initStore } from '../store/store';
import { Provider } from 'react-redux';
import { loadChats } from '../store/chatAction';

const store = initStore ();
store.dispatch (loadChats ());
export class App extends Component {
    // state = {
    //     chats : {
    //         1: {
    //             name: 'Anna',
    //             messages: [
    //                 {name: "chatBot", content: "Hello!"},
    //                 {name: "Anna", content: "Hi! How are you?"},
    //                 {name: "chatBot", content: "I am well!"},
    //             ],
    //         },
    //         2: {
    //             name: 'Elena',
    //             messages: [
    //                 {name: "chatBot", content: "Hello!"},
    //                 {name: "Elena", content: "Hi! It's interesting to talking with robot for me)"},
    //             ],
    //         },
    //         3: {
    //             name: 'Olga',
    //             messages: [],
    //         },
    //     },
    //     activeId: 3,
    // }

    componentWillUnmount () {
        console.log ('App unmount');
    }
    
    // handleChangeId = (newId) => {
    //     this.setState (() => ({
    //         activeId: newId,
    //     }))
    // }

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
    }

    render () {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    };  
}
