import React, {Component} from "react";
import ChatContainer from "./containers/ChatContainer";
import { ChatList } from "./components/ChatList/ChatList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { initStore } from './store/store';
import { Provider } from 'react-redux';
import {loadChats} from './store/chatAction';

const store = initStore();
store.dispatch(loadChats());

export class App extends Component {
    render () {
        return (
      <Provider store={store}>
            <BrowserRouter>
        <ChatList />
        <Switch>
            <Route path="/chats/:id" exact component={ChatContainer} />

            <Route path="/about">
                It's about...
            </Route>
            <Route path="/home">
                It's home...
            </Route>
            <Route path="/">
               It's index!
            </Route>
        </Switch>
            </BrowserRouter>
      </Provider>
        )
    }
}