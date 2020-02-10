import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {Header} from "../Header/Header";
import ChatContainer from "../../containers/ChatContainer";
import ChatListContainer from "../../containers/ChatListContainer";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../../store/store";


export class Router extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Header />
                <ChatListContainer />
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
            </ConnectedRouter>
        )
    }
}