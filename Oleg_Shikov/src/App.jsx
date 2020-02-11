import React, { Component } from "react";
import ChatListContainer from "./containers/ChatListContainer";
import ChatContainer from "./containers/ChatContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initStore, history } from './store/store';
import { Provider } from 'react-redux';
import {loadChats} from './store/asyncChatAction';
import {ConnectedRouter} from "connected-react-router";
// https://domain/page/2 - BrowserRouter
// https://domain/#page/2 - HashRouter
const store = initStore();
store.dispatch(loadChats());

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <ChatListContainer />
                    <Switch>
                        <Route path="/chats/" exact component={ChatContainer} />
                        <Route path="/chats/:id" exact component={ChatContainer} />
                        <Route path="/about">
                            It's about
                </Route>
                        <Route path="/home">
                            It's home
                </Route>
                        <Route path="/">
                            It's 404
                </Route>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}