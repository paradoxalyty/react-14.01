import React, { Component } from 'react';
import ChatContainer from './ChatContainer.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatList } from '../components/ChatList/ChatList.jsx';
import { ChatListContainer } from '../containers/ChatListContainer.jsx';
import { Profile } from '../components/Profile/Profile.jsx';
import { initStore } from '../store/store';
import { Provider } from 'react-redux';
import { loadChats } from '../store/chatAction'

const store = initStore();
store.dispatch(loadChats());

export class App extends Component {

    render() {
        return (

            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/profile' exact component={Profile}></Route>
                        <Route path='/chats' exact component={ChatListContainer}></Route>
                        <Route path='/chats/:id' exact component={ChatContainer} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )

    }
}

