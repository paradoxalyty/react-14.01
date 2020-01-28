import React from "react";
import PropTypes from 'prop-types';
import MessageList from '../MessageList/MessageList'
import ChatForm from '../ChatForm/ChatForm'

/**
 *  Компонент объединения формы отправки нового сообщения и области отображения сообщений чата
 *  @param {Array} messages - array of chat messages with sender name, sending time values
 *  @param {string} message - message text
 *  @param {string} name - sender name
 *  @param {string} time - sending message time
 *  @param {function} onSendMessage - sending new message handler
 */
export const Chat = ({messages, message, name, time, onSendMessage}) =>
    (<div>
        <MessageList messages={messages} />
        <ChatForm {...{message, name, time, onSendMessage}} />
    </div>);

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired,
}