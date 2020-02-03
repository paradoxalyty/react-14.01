import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useState('User');
    const [content, setContent] = useState('My message');

    const handleClick = () => {
        onSendMessage({ name, content });
        setName("");
        setContent("");
    }

    const handleKeyUp = (event) => {
        if (event.ctrlKey && event.key == "Enter") {
            handleClick();
        }
    }

    return (<div>
        <TextField
            variant="outlined"
            label="Автор"
            //value=""
            onChange={({ currentTarget: { value } }) => setName(value)}
            type="text" />
        <TextField
            variant="outlined"
            multiline
            autoFocus
            label="Сообщение"
            //value=""
            onKeyUp={handleKeyUp}
            onChange={({ currentTarget: { value } }) => setContent(value)} />
        <Button onClick={handleClick} variant="contained" color="primary">Отправить</Button>
    </div>);
}