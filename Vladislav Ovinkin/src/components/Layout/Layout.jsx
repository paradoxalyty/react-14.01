import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer'
import './Layout.css'

export const Layout = () => {
    return ( <div className="layoutHeader">
                <Header />
                <div className="layoutChatList">
                    <BrowserRouter>
                        <ChatList />
                        <Switch>
                            <Route path="/chats/" exact component={ChatContainer} />
                            <Route path="/chats/:id" exact component={ChatContainer} />
                            <Route path="/about">
                                It's about
                            </Route>
                            <Route path="/home">
                                It's home
                            </Route>
                            <Route path="/">
                                It's 404
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>);
}