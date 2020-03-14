import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Header} from '../Header/Header';
import ChatsListContainer from '../../containers/ChatsListContainer';
import {Profile} from '../Profile/Profile';
import ChatContainer from '../../containers/ChatContainer';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../../store/store';
import './Layout.css';

export const Layout = () => {

    return (<ConnectedRouter history={history}>
        <div className="layout">
            <Header/>
            <main>
                <div className="wrapper">
                    <ChatsListContainer/>
                    <Switch>
                        <Route path="/chats/" exact component={ChatContainer}/>
                        <Route path="/chats/:id" exact component={ChatContainer}/>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/home">
                            <div className="home mainBlock"><h3>Home</h3></div>
                        </Route>
                        <Route path="/">
                            <div className="404 mainBlock"><h3>404</h3></div>
                        </Route>
                    </Switch>
                </div>
            </main>
        </div>
    </ConnectedRouter>);
};