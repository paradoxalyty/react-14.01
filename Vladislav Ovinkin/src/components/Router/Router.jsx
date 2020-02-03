import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Profile } from '../Profile/Profile';

export const Router = ({chatList, activeChatId, onChatChange, onSendMessage}) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chats/" exact render={() => (<Layout noParams={1} chatList={chatList} activeChatId={activeChatId} onChatChange={onChatChange} onSendMessage={onSendMessage} />)} />
                {/* <Route path="/chats/" exact component={App} render={() => (<Layout chatList={chatList} activeChatId={activeChatId} onChatChange={onChatChange} />)} /> */}
                <Route path="/chats/:id" exact render={(props) => (<Layout {...props} chatList={chatList} activeChatId={activeChatId} onChatChange={onChatChange} onSendMessage={onSendMessage} />)} />
                <Route path="/about">
                    It's about
                </Route>
                <Route path="/home">
                    It's home
                </Route>
                <Route path="/profile/" exact component={Profile} />
                <Route path="/">
                    It's 404
                </Route>
            </Switch>
        </BrowserRouter>
    )
}