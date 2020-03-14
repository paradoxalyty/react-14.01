import React from 'react';
import MessageList from '../MessageList/MessageList';
import ChatFormContainer from '../../containers/ChatFormContainer';
import './Chat.css';

/**
 *  Компонент объединения формы отправки нового сообщения и области отображения сообщений чата
 */
export const Chat = ({id}) =>
    (<div className="chat">
        <MessageList id={id} />
        <ChatFormContainer id={id} />
    </div>);