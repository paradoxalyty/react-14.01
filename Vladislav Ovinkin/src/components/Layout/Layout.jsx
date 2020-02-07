import React from "react";
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer'
import './Layout.css'

export const Layout = (props) => {
    const {chatList, id, onChatChange, onSendMessage} = props;

    return (
        <div className="layoutHeader">
            <Header text={(id && chatList[id]) ? chatList[id].name : "выберите чат"} />
            <div className="layoutChatList">
                <ChatList chatList={chatList} pathId={id} />
                <ChatContainer chats={chatList} id={id} onSendMessage={onSendMessage} />
            </div>
        </div>);
}