import React, { Component } from 'react';
import ChatContainer from './ChatContainer.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initStore, history } from '../store/store';
import { Provider } from 'react-redux';
import { loadChats, loadProfile } from '../store/chatAction'
import ChatListContainer from './ChatListContainer.jsx';
import ProfileContainer from './ProfileContainer.jsx';
import {ConnectedRouter} from 'connected-react-router';

const store = initStore();
store.dispatch(loadChats());
store.dispatch(loadProfile());


export class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch >
                        <Route path='/profile' exact component={ProfileContainer}></Route>
                        <Route path='/chats/:id' exact component={ChatContainer} />
                    </Switch>
                    <ChatListContainer />
                </ConnectedRouter>
            </Provider>
        )

    }
}

