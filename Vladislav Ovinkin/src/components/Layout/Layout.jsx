import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer'
import './Layout.css'

export const Layout = ({chatList, activeChatId, onChatChange}) => {
    return ( 
        <div className="layoutHeader">
            <Header text={activeChatId}/>
            <div className="layoutChatList">
                <BrowserRouter>
                    <ChatList chatList={chatList} onChatChange={onChatChange} />
                    <Switch>
                        <Route path="/chats/" exact render={(props) => (<ChatContainer {...props} chats={chatList} />)} />
                        <Route path="/chats/:id" exact render={(props) => (<ChatContainer {...props} chats={chatList} />)} />
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