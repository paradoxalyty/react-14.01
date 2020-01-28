import React, {Component} from 'react';
import {Layout} from '../components/Layout/Layout';

const messages = [
    {name: 'Me', content: 'Good afternoon!'},
    {name: 'Me', content: 'How are you?'},
    {name: 'Me', content: 'Can you help me please?'},
];


export class App extends Component {
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
        const {input} = this.state;

        return <Layout messages={messages}
                       input={input}
                       handleButton={this.handleButton}
                       handleChange={this.handleChange}
                       handleKeyUp={this.handleKeyUp}
        />;
    }
}