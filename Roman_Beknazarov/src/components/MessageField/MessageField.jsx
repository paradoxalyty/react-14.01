import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from "@material-ui/core/Fab";
import SendIcon from 'material-ui/svg-icons/content/send';
import { Message } from '../Message/Message';
import './MessageField.css';

export class MessageField extends Component {

    state = {
        messages: [
            {text: "Hello!", sender: 'bot'},
            {text: "How are you?", sender: 'bot'}
        ],
        input: '',
    };

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            this.setState({
                messages: [...this.state.messages, {
                    text: "Don't bother me I'm a robot",
                    sender: 'bot'
                }]
            })
        }
    }

    handleClick = (message) => {
        this.sendMessage(message)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };

    sendMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, {text: message, sender: 'me'}],
            input: '',
        });
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender}/>
        ));

        return <div className="message-field">
            <div className="messages">
                {messageElements}
            </div>

            <div className="user-message" >
                <TextField
                    name="input"
                    fullWidth={true}
                    label="Your message"
                    autoFocus
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
                />

                <Fab onClick={() => this.handleClick(this.state.input)}>
                    <SendIcon/>
                </Fab>

            </div>
        </div>
    }
}