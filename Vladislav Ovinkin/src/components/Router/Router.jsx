import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from '../../containers/App';
import { Profile } from '../Profile/Profile';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chats/" exact component={App} />
                <Route path="/chats/:id" exact component={App} />
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