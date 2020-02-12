import React from "react";
import MessageList from '../MessageList/MessageList'
import ChatForm from '../ChatForm/ChatForm'
import './Chat.css'

/**
 *  Компонент объединения формы отправки нового сообщения и области отображения сообщений чата
 */
export const Chat = (props) =>
    (<div className="chat">
        <MessageList id={props.id} />
        <ChatForm id={props.id} />
    </div>);