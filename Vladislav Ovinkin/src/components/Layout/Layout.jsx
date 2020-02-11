import React from "react";
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import ChatContainer from '../../containers/ChatContainer'
import './Layout.css'

export const Layout = (props) => {
    const {chatList, stateId, onChangeId, onSendMessage, onChatAdd} = props;
    const id = +props.match.params.id;

    // console.log ('Component: Layout', props, id === stateId);

    return (
        <div className="layoutHeader">
            <Header text={(id && chatList[id]) ? chatList[id].name : "выберите чат"} />
            <div className="layoutChatList">
                <ChatList chatList={chatList} pathId={id} onChatAdd={onChatAdd} />
                <ChatContainer chats={chatList} id={id} stateId={stateId} onSendMessage={onSendMessage} onChangeId={onChangeId} />
            </div>
        </div>);
}