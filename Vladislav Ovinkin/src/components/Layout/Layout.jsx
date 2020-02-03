import React from "react";
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer'
import './Layout.css'

export const Layout = (props) => {
    const {chatList, activeChatId, onChatChange, onSendMessage} = props;
    let id;
    !props.noParams ? id = props.match.params.id : id = 0;

    console.log ("LayoutId: ", id);
    //onChatChange (id);

    return (
        <div className="layoutHeader">
            <Header text={(activeChatId && chatList[activeChatId]) ? chatList[activeChatId].name : "выберите чат"} />
            <div className="layoutChatList">
                <ChatList chatList={chatList} pathId={id} />
                <ChatContainer chats={chatList} id={id} onChatChange={onChatChange} onSendMessage={onSendMessage} />
            </div>
        </div>);
}