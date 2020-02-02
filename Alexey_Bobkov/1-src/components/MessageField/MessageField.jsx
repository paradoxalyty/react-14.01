import React from 'react';
import { Message } from '../Message/Message.jsx';
import PropTypes from 'prop-types';
import './MessageField.sass';

export const MessageField = ({ messages }) =>
(<div className='MessageField'>{
    messages.map((message, index) => <Message {...message} key={index} />)}
    
</div>);
//console.log(<Message></Message>,3);
MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}