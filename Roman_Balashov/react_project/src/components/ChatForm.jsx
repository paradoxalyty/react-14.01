import React, {Component} from 'react';
import TextField from './TextField';
import Button from './Button';

export class ChatForm extends Component {
    render() {
        return <form className="chat-form">
            <TextField />
            <Button />
        </form>;
    }
}