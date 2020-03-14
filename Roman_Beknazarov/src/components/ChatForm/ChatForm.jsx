import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './ChatForm.css';

export const ChatForm = ({onSendMessage}) => {
    const [name, setName] = useState('User');
    const [content, setContent] = useState('My message');
    let textInput = useRef(null);

    const handleClick = () => {
        onSendMessage({name, content});
        textInput.current.value = '';
    };

    const handleKeyUp = (event, message) => {
        if (event.shiftKey && event.keyCode === 13) {
            handleClick(message);
        }
    };

    return (
        <div className="ChatForm">
            <TextField variant="outlined"
                label="Author"
                value={name}
                onChange={({currentTarget: {value}}) => setName(value)}
                type="text"
            />
            <TextField variant="outlined"
                label="Your message"
                value={content}
                multiline
                inputRef={textInput}
                autoFocus
                onChange={({currentTarget: {value}}) => setContent(value)}
                onKeyUp={(event) => handleKeyUp(event, content)}
            />
            <Button onClick={handleClick} variant="contained" color="primary">Send</Button>
        </div>
    );
};

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};