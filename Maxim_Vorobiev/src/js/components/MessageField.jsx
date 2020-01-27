import React, {Component} from 'react';
import {Message} from './Message';
import {Button} from './Button';
import {Input} from './Input';

// Messages
const messages = [
    {name: 'Me', content: 'Good afternoon!'},
    {name: 'Me', content: 'How are you?'},
    {name: 'Me', content: 'Can you help me please?'},
];

export class MessageField extends Component {
    state = {
        messages: messages,
        input: '',
    };

    // Add a new message
    sendMessage = (name, content) => {
        this.setState((state) => ({
            messages: [...state.messages, {name: name, content: content}],
            input: '',
        }));
    };

    // Button send message handler
    handleButton = (message) => {
        this.sendMessage('Me', message);
    };

    // Send message by Enter
    handleKeyUp = (e, message) => {
        if (e.keyCode === 13) {
            this.sendMessage('Me', message);
        }
    };

    // Get input value (message) and change state 'input' when typing
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}); // e.target.name == input
    };

    // When the messages field is updated
    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].name !== 'bot') {
            setTimeout(() =>
                    this.sendMessage('bot', 'I will be back in a minute!'),
                300);
        }
    }

    render() {
        const {messages} = this.state;

        const messageField = messages.map((message, index) => (
            <Message key={index} name={message.name} content={message.content}/>
        ));

        return (
                <div className="react-messenger__message-field">
                    <div className="react-messenger__messages">
                        {messageField}
                    </div>

                    <Input handleKeyUp={this.handleKeyUp}
                           handleChange={this.handleChange}
                           input={this.state.input}/>

                    <Button handleButton={this.handleButton}
                            input={this.state.input}/>
                </div>
        )
    }
}