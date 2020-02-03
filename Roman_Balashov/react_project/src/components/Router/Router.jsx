import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChatList } from "../ChatList/ChatList";
import {Profile} from "../Profile/Profile";
import {Header} from "../Header/Header";
import { ChatContainer } from "../../containers/ChatContainer";

export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <ChatList />
                <Switch>
                    <Route path="/chats/" exact component={ChatContainer} />
                    <Route path="/chats/:id" exact component={ChatContainer} />
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