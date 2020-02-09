import React, { Component } from 'react';
import ChatContainer from './ChatContainer.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initStore } from '../store/store';
import { Provider } from 'react-redux';
import { loadChats } from '../store/chatAction'
import ChatListContainer from './ChatListContainer.jsx';
import ProfileContainer from './ProfileContainer.jsx';
const store = initStore();
store.dispatch(loadChats());

export class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch >
                        <Route path='/profile' exact component={ProfileContainer}></Route>
                        <Route path='/chats' exact component={ChatListContainer}></Route>
                        <Route path='/chats/:id' exact component={ChatContainer} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )

    }
}

