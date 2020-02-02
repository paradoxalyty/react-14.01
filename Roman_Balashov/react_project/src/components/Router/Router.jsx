import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatList } from "../ChatList/ChatList";
import { Chat } from "../Chat/Chat";

export class Router extends Component {
    render() {
        <BrowserRouter>
            <ChatList>
                <Switch>
                    <Route path="/chats/" component={Chat} />
                    <Route path="/chats/:id" component={Chat} />
                    <Route path="/">
                        Choose chat.
                    </Route>
                </Switch>
            </ChatList>
        </BrowserRouter>
    }
}