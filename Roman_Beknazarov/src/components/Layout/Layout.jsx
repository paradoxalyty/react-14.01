import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {ChatContainer} from "../../Containers/ChatContainer";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";

import './Layout.css';

export const Layout = () => {

    return (
        <MuiThemeProvider>
            <div className="layout">
                <Header/>
                <main className="main">
                    <BrowserRouter>
                        <ChatList />
                        <Switch>
                            <Route path="/chats/" exact component={ ChatContainer } />
                            <Route path="/chats/:id" exact component={ ChatContainer } />
                            <Route path="/about">
                                It's About
                            </Route>
                            <Route path="/home">
                                It's Home
                            </Route>
                            <Route path="/" >
                                It's 404
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </main>
            </div>
        </MuiThemeProvider>
    );
};