import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { App } from '../../containers/App';
import Layout from '../Layout/Layout';
import { Profile } from '../Profile/Profile';

import {Provider} from 'react-redux';
import { connect } from 'react-redux';



export const Router = (props) => {
    // console.log ('Component Router', props);
    // const {chatList, stateId, onChangeId, onSendMessage, onChatAdd} = props;

    // console.log (props);
    // return (1);
    // console.log (props);

    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/chats/" exact render={(props) => (<Layout {...props} chatList={chatList} stateId={stateId} onChangeId={onChangeId} onSendMessage={onSendMessage} onChatAdd={onChatAdd} />)} />
                <Route path="/chats/:id" exact render={(props) => (<Layout {...props} chatList={chatList} stateId={stateId} onChangeId={onChangeId} onSendMessage={onSendMessage} onChatAdd={onChatAdd} />)}/> */}
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