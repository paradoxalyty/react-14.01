import React, { Component } from "react";
import { ChatList } from "./components/ChatList/ChatList";
import ChatContainer from "./containers/ChatContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initStore } from './store/store';
import { Provider } from 'react-redux';
import {loadChats} from './store/chatAction';
// https://domain/page/2 - BrowserRouter
// https://domain/#page/2 - HashRouter
const store = initStore();
store.dispatch(loadChats());

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ChatList />
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
                </BrowserRouter>
            </Provider>
        )
    }
}