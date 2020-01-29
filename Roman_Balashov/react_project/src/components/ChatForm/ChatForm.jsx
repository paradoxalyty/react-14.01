import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ChatForm.css';

export class ChatForm extends Component {
    state = {
        name: 'Dog',
        text: '',
        inputError: false
    };
    TextField = React.createRef();
    handleClick = () => {
        this.sendNewMessage();
    };
    handleInput = ({ currentTarget: { value, name } }) => {
        this.setState(() => ({ [name]: value }))
    };
    handleEnterKey = (event) => {
        if (event.keyCode === 13) {
            this.sendNewMessage();
        }
    };
    sendNewMessage = () => {
        this.setState({
            text: ''
        });
        const { name, text } = this.state;
        this.props.sendMessage({ name, text });
    }
    render() {
        return <div className="chat-form">
            <TextField name="name" label="Name" variant="outlined" size="small" value={this.state.name} onChange={this.handleInput} ref={this.TextField}></TextField>
            <TextField name="text" label="Text" variant="outlined" size="small" value={this.state.text} onChange={this.handleInput} onKeyUp={this.handleEnterKey} error={this.state.inputError}></TextField>
            <Button variant="contained" color="primary" onClick={this.handleClick}>Send</Button>
        </div>;
    }
}