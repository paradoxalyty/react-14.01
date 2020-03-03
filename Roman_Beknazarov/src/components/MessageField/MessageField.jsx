import React from 'react';
import PropTypes from 'prop-types';
import './MessageField.css';
import {Message} from '../Message/Message';

export const MessageField = ({messages}) =>
    (<div className='MessageField'>
        <div className="messages">
            {messages.map((message, index) => <Message {...message} key={index}/>)}
        </div>
    </div>);

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};