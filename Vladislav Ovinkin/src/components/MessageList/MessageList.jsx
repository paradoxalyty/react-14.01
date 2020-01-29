import React from "react";
import { Message } from '../Message/Message';
import PropTypes from 'prop-types';
import './MessageList.css';

export const MessageList = ({ messages }) => 
    (<div className='messageList'> 
        {messages.map ((message, index) => <Message {...message} key = { index } />)}
    </div>);

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}