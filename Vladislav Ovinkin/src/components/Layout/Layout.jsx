import React from "react";
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer'
import './Layout.css'

export const Layout = () => {
    return ( <div className="layoutHeader">
        <Header />
        <div className="layoutChatList">
            <ChatList className="chatList" />
            <ChatContainer className="chatContainer" />
        </div>
    </div>);
}