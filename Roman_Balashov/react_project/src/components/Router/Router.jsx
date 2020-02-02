import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatList } from "../ChatList/ChatList";
import { Chat } from "../Chat/Chat";
import {Profile} from "../Profile/Profile";
import {Header} from "../Header/Header";

export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <ChatList />
                <Switch>
                    <Route path="/chats/" exact component={Chat} />
                    <Route path="/chats/:id" exact component={Chat} />
                    <Route path="/" exact>
                        Choose chat.
                    </Route>
                    <Route exact path='/profile/' component={Profile}/>
                    <Route path="/">
                        404 Not Found.
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}