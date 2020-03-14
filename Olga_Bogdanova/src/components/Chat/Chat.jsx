import React from 'react';
import PropTypes from 'prop-types';
import { ChatForm } from '../ChatForm/ChatForm';
import { Message } from '../Message/Message';
import { MessageField } from '../MessageField/MessageField';

/**
 * Компонент по отрисовке поля с формой отправки нового сообщения
 * @param {string} messages Массив сообщений 
 * @param {string} message Текст сообщенеия 
 * @param {string} name Имя отправителя
 * @param {function} onSendMessage Функция отправки сообщения 
 */

export const Chat = ({ messages, onSendMessage }) => {
  if(messages) {
    return  (<div>
      <MessageField messages={messages} />
      <ChatForm onSendMessage={onSendMessage} />
    </div>)
  }else {
    return <span>Вы не выбрали чат  </span>

  }


}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
  onSendMessage: PropTypes.func.isRequired
}
