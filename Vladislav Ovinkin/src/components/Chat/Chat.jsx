import React from "react";
import PropTypes from 'prop-types';
import { MessageList } from '../MessageList/MessageList'
import { Message } from '../Message/Message'
import { ChatForm } from '../ChatForm/ChatForm'

/**
 *  Компонент объединения формы отправки нового сообщения и области отображения сообщений чата
 *  @param {Array} messages - array of chat messages with sender name, sending time values
 *  @param {function} onSendMessage - sending new message handler
 */
export const Chat = ({messages, onSendMessage}) =>
    (<div>
        <MessageList messages={messages} />
        <ChatForm onSendMessage={onSendMessage} />
    </div>);

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}