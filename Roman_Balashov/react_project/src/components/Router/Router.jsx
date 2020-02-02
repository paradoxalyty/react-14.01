import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatList } from "../ChatList/ChatList";
import { Chat } from "../Chat/Chat";

export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <ChatList />
                <Switch>
                    <Route path="/chats/" component={Chat} exact/>
                    <Route path="/chats/:id" exact component={Chat} />
                    <Route path="/" exact>
                        Choose chat.
                    </Route>
                    <Route path="/">
                        404 Not Found.
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}