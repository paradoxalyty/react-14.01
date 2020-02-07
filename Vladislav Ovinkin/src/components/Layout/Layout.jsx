import React from "react";
import { Header } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer'
import './Layout.css'

export const Layout = (props) => {
    const {chatList, stateId, onChangeId, onSendMessage} = props;
    const {id} = props.match.params;

    console.log ('Component: Layout', props, +id === stateId);

    // if (id && +id !== stateId) {
    //     onChangeId (+id);
    // }

    return (
        <div className="layoutHeader">
            <Header text={(id && chatList[id]) ? chatList[id].name : "выберите чат"} />
            <div className="layoutChatList">
                <ChatList chatList={chatList} pathId={id} />
                <ChatContainer chats={chatList} id={+id} stateId={stateId} onSendMessage={onSendMessage} onChangeId={onChangeId} />
            </div>
        </div>);
}