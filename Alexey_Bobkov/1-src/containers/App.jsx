import React, { Component } from 'react';
import ChatContainer from './ChatContainer.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatList } from '../components/ChatList/ChatList.jsx';
import { Profile } from '../components/Profile/Profile.jsx';
import { initStore } from '../store/store';
import { Provider } from 'react-redux';

export class App extends Component {

    render() {
        return (
            <Provider>
                <BrowserRouter store={initStore()}> 
            <Switch>
                <Route path='/profile' exact component={Profile}></Route>
                <Route path='/chats' exact component={ChatList}></Route>
                <Route path='/chats/:id' exact component={ChatContainer}/>
            </Switch>
            </BrowserRouter>
            </Provider>
        )

    }
}

