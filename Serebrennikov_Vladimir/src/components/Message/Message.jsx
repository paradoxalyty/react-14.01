import React from "react";
import './Message.css';

export const Message = ({name, text, sender}) => (
  <div className='Message' style={{alignSelf: sender === 'bot' ? 'flex-start' : 'flex-end' }}>
    <strong>{name}:</strong> {text}
  </div>
);