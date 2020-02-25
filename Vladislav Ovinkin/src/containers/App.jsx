import React, { Component } from 'react';
import { Router } from '../components/Router/Router';
import { initStore } from '../store/store';
import { Provider } from 'react-redux';
import { loadChats } from '../store/chatAction';

const store = initStore ();
store.dispatch (loadChats ());
export class App extends Component {
    
    handleChatAdd = (name) => {
        const chatsId = Object.keys (this.state.chats);
        const newChatId = Math.max.apply(null, chatsId) + 1;
        
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
    
    componentWillUnmount () {
        console.log ('App unmount');
    }
    
    render () {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }  
}
