import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {ChatContainer} from "../../Containers/ChatContainer";
import {Header} from "../Header/Header";
import {ChatList} from "../ChatList/ChatList";

import './Layout.css';

export const Layout = () => {

    return (<BrowserRouter>
            <MuiThemeProvider>
                <div className="layout">
                    <Header/>
                    <main>
                        <div className="wrapper">
                            <ChatList/>
                            <Switch>
                                <Route path="/chats/" exact component={ChatContainer}/>
                                <Route path="/chats/:id" exact component={ChatContainer}/>
                                <Route path="/profile">
                                    <div className="profile emptyBlock">Profile</div>
                                </Route>
                                <Route path="/home">
                                    <div className="home emptyBlock">Home</div>
                                </Route>
                                <Route path="/">
                                    <div className="404 emptyBlock">404</div>
                                </Route>
                            </Switch>
                        </div>
                    </main>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
    );
};