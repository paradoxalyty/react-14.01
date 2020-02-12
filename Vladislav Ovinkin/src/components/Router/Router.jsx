import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Profile } from '../Profile/Profile';

export const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chats/" exact component={Layout} />
                <Route path="/chats/:id" exact component={Layout} />
                <Route path="/about">
                    It's about
                </Route>
                <Route path="/home">
                    It's home
                </Route>
                <Route path="/profile" exact component={Profile} />
                <Route path="/">
                    It's 404
                </Route>
            </Switch>
        </BrowserRouter>
    )
}