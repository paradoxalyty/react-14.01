import React from 'react';
import TextField from './TextField.jsx';
import Button from './Button.jsx';

// const ChatForm = () => <form className="chat-form"><TextField /><Button /></form>;

class ChatForm extends React.Component {
    render(){
        return <form className="chat-form"><TextField /><Button /></form>;
    }
}

export default ChatForm;