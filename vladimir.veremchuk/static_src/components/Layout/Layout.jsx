import React, {Component} from "react";
import {Header} from "../Header/Header.jsx"
import {ChatList} from '../ChatList/ChatList.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChatListContainer from "../../containers/ChatListContainer.jsx";
import ChatContainer from "../../containers/ChatContainer.jsx";
import {Profile} from "../Profile/Profile.jsx"

export class Layout extends Component {
    render() {
      return (
        <BrowserRouter>
          <Header />
            <ChatListContainer />
            <Switch>
            <Route path="/chats/" exact component={ChatContainer} />
                <Route path="/chats/:id/" exact component={ChatContainer} />
                <Route path="/profile" exact component={Profile}></Route>
            </Switch>
        </BrowserRouter>
      );
    }

}