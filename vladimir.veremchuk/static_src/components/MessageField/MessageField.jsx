import React from "react";
import {Message} from '../Message/Message.jsx';
import PropTypes from "prop-types";
import './MessageField.css';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

class MessageField extends React.Component {
    state = {
        messages : [
            {name: "Ivan", content: "Hello!"},
            {name: "Oleg", content: "Hi, how are you?"},
            {name: "Ivan", content: "I am well"}
        ],
        input : ''
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length -1].name !== "ChatBot") {
            setTimeout(()=>
            this.setState({ messages: [...this.state.messages, {name: "ChatBot", content: "TestAnswer"}]}),1000
        )
        }
    };

    handleClick = (message) => {this.sendMessage(message)};

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };
 
    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };
   
    sendMessage = (message) => {
        this.setState({ messages: [ ...this.state.messages, {content: message, name: 'me'} ], input: '' });
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} name={message.name} content={message.content} />
        ));

        return <>
            <div className = "MessageField">
            {messageElements}
            </div>
            <div>
            <TextField name ="input" value={ this.state.input } onChange={this.handleChange} onKeyUp={(event) => this.handleKeyUp(event, this.state.input)} />
            <FloatingActionButton onClick={()=>this.handleClick(this.state.input)}> <SendIcon /></FloatingActionButton>
            </div>
            </>
    }
}

export default MessageField;