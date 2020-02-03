import React from "react";
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer'
import './Layout.css'

export const Layout = ({id, chatList, activeChatId, onChatChange}) => {
    return (
        <div className="layoutHeader">
            <Header text={activeChatId ? chatList[activeChatId].name : ""} />
            <div className="layoutChatList">
                <ChatList chatList={chatList} activeChahtId={activeChatId} onChatChange={onChatChange} />
                <ChatContainer chats={chatList} id={id} activeChatId={activeChatId} onChatChange={onChatChange} />
            </div>
        </div>);
}