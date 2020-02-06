import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ChatContainer from '../../Containers/ChatContainer';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {Profile} from '../Profile/Profile';

import './Layout.css';

export const Layout = () => {
console.log();
    return (<BrowserRouter>
                <div className="layout">
                    <Header/>
                    <main>
                        <div className="wrapper">
                            <ChatList/>
                            <Switch>
                                <Route path="/chats/" exact component={ChatContainer}/>
                                <Route path="/chats/:id" exact component={ChatContainer}/>
                                <Route path="/profile">
                                    <Profile />
                                </Route>
                                <Route path="/home">
                                    <div className="home mainBlock"><h4>Home</h4></div>
                                </Route>
                                <Route path="/">
                                    <div className="404 mainBlock"><h4>404</h4></div>
                                </Route>
                            </Switch>
                        </div>
                    </main>
                </div>
        </BrowserRouter>
    );
};