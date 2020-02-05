import './MessageField.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
/**
 * 
 * @param {*} param0 
 */
export const MessageField = ({ messages }) =>
(<div className="MessageField">
    {messages.map((message, index) => <Message {...message} key={index}/>)}
</div>);


    MessageField.propTypes = {
        //https://ru.reactjs.org/docs/typechecking-with-proptypes.html
        messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
    }