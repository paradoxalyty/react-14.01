import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { App } from '../../containers/App';
import { Layout } from '../Layout/Layout';
import { Profile } from '../Profile/Profile';

export const Router = (props) => {
    console.log ('Component Router', props);
    const {chatList, stateId, onChangeId, onSendMessage} = props;
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chats/" exact render={(props) => (<Layout {...props} chatList={chatList} stateId={stateId} onChangeId={onChangeId} onSendMessage={onSendMessage} />)} />
                <Route path="/chats/:id" exact render={(props) => (<Layout {...props} chatList={chatList} stateId={stateId} onChangeId={onChangeId} onSendMessage={onSendMessage} />)}/>
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