import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './chatForm.scss';

export const ChatForm = ({ onSendMessage }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleClick = () => {
    onSendMessage({ name, content });
  }

  const handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { // Enter
      onSendMessage({ name, content });

    }
  };

  return (<div className='ChatForm'>
    <TextField
      className='TextField'
      variant="outlined"
      value={name}
      onChange={({ currentTarget: { value } }) => setName(value)}
      type="text" />
    <TextField
      className='TextField'
      variant="outlined"
      multiline
      autoFocus
      onKeyUp={handleKeyUp}
      value={content}
      onChange={({ currentTarget: { value } }) => setContent(value)} />
    <Button
      className='Button'
      onClick={handleClick}
      variant="contained"
      color="primary">
      Отправить
  </Button>
  </div>);
}

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired
}

