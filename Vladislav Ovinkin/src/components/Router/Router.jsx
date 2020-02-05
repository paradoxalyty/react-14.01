import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from '../../containers/App';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chats/" exact component={App} />
                {/* <Route path="/chats/" exact component={App} render={() => (<Layout chatList={chatList} activeChatId={activeChatId} onChatChange={onChatChange} />)} /> */}
                <Route path="/chats/:id" exact component={App} />
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
    )
}