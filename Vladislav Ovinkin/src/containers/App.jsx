import React, { Component } from 'react';
import { Router } from '../components/Router/Router';
import { initStore } from '../store/store';
import { Provider } from 'react-redux';
import { loadChats } from '../store/chatAction';

const store = initStore ();
store.dispatch (loadChats ());
export class App extends Component {
    
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
