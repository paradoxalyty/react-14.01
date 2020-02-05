import React from "react"
import {ChatList} from "../ChatList/ChatList"
import {Header} from "..//Header/Header"
import {ChatContainer} from "../../containers/ChatContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './Layout.css'

export const Layout = () => {
    return (
        <BrowserRouter> 
            <div className="layout">
                <Header />
                <ChatList />
                <Switch>
                    <Route path="/chats/" exact component={ChatContainer} />
                    <Route path="/chats/:id" exact component={ChatContainer} />
                    <Route path="/about">
                        About us
                    </Route>
                    <Route path="/home">
                        Home page
                    </Route>
                    <Route path="/" exact>
                        404 not found
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}