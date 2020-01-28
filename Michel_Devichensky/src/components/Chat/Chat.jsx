import './Chat.css'

import React from 'react';
import PropTypes from 'prop-types';

import { MessageField } from '../MessageField/MessageField';
import { Message } from '../Message/Message';
import { ChatForm } from '../ChatForm/ChatForm';
/**
 * Компонент по отрисовки поля с формой отправки нового сообщения
 * @param {string} messages Массив с именем отправителя и сообщением
 * @param {string} message Текст сообщения
 * @param {string} name Имя отправителя
 * @param {Function} onSendMessage Обработчик отправки нового сообщения 
 */
export const Chat = ({ messages, message, name, onSendMessage }) => 
(<div className="wrapper--container">
    <MessageField messages={messages}/>
    <ChatForm {...{message, name, onSendMessage}} 
    placeholderName="User"
    placeholderMessage="my Message"
    /> 
</div>);

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
}