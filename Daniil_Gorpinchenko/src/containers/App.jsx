import React, {Component} from "react";
import { ChatContainer } from "./ChatContainer";
import { ChatList } from "../components/ChatList/ChatList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export class App extends Component {
    render () {
        return (
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
                It's 404...( !
            </Route>
        </Switch>
            </BrowserRouter>
        )
    }
}