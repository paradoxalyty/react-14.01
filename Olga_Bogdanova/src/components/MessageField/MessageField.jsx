import React from "react";
import { Message } from '../Message/Message';
import PropTypes from 'prop-types';
import './messageField.scss';

export const MessageField = ({ messages }) =>
  (<div className='MessageField'>
    {messages.map((message, index) => <Message {...message} key={index} />)};
</div>);
//хранение в словаре с index в качестве ключа
MessageField.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}