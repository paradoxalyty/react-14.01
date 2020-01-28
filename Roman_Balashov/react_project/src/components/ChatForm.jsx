import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class ChatForm extends Component {
    state = {
        name: 'Dog',
        text: ''
    }
    TextField = React.createRef();
    handleClick = () => {
        const { name, text } = this.state;
        this.props.sendMessage({ name, text });
    }
    handleInput = ({ currentTarget: { value, name } }) => {
        this.setState(() => ({ [name]: value }))
    }
    handleEnterKey = (event, message) => {
        if (event.keyCode === 13) {
            this.props.sendMessage(message);
        }
    }
    render() {
        return <div className="chat--form">
            <TextField name="name" variant="outlined" value={this.state.name} onChange={this.handleInput} ref={this.TextField}></TextField>
            <TextField name="text" variant="outlined" value={this.state.text} onChange={this.handleInput}></TextField>
            <Button variant="contained" color="primary" onClick={this.handleClick} onKeyUp={this.handleEnterKey}>Send</Button>
        </div>;
    }
}