import React from 'react';
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';


export const MessageField = ({messages}) => 
    (messages.map((message, index) => <Message {...message} key={index}/>));

MessageField.PropTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
    }