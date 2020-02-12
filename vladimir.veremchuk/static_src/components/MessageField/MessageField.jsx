import React from "react";
import {Message} from '../Message/Message.jsx';
import './MessageField.css';

export const MessageField = ({ messages }) =>
    (<div className='MessageField'>
        {messages.map((message, index) => <Message {...message} key={index} />)}
    </div>);