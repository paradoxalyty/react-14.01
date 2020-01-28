import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class ChatForm extends Component {
    state = {
        name: 'User',
        message: 'Message'
    }
    handleClick = (message) => {
        this.props.sendMessage({name: this.state.name, message: this.state.message});
        console.log(1)
    }
    handleEnterKey = (event, message) => {
        if(event.keyCode === 13) {
            this.props.sendMessage(message);
        }
    }
    render() {
        return <div className="chat--form">
            <TextField name="username" variant="outlined" value={this.state.name} onChange={this.props.handleChange}></TextField>
            <TextField name="message" variant="outlined" value={this.state.message}></TextField>
            <Button variant="contained" color="primary" onClick={this.handleClick}>Send</Button>
        </div>;
    }
}