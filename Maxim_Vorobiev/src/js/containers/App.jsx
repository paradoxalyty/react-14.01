import React, {Component} from 'react';
import {Layout} from '../components/Layout/Layout';

const BOT_NAME = 'Bot';
const USER_NAME = 'Me';
const messages = [
    {name: USER_NAME, content: 'Good afternoon!'},
    {name: USER_NAME, content: 'How are you?'},
    {name: USER_NAME, content: 'Can you help me please?'},
];

export class App extends Component {
    state = {
        messages: messages,
        input: '',
    };

    sendMessage = (name, content) => {
        this.setState((state) => ({
            messages: [...state.messages, {name: name, content: content}],
            input: '',
        }));
    };

    handleButton = (message) => {
        this.sendMessage(USER_NAME, message);
    };

    handleKeyUp = (e, message) => {
        if (e.keyCode === 13) {
            this.sendMessage(USER_NAME, message);
        }
    };

// Get input value (message) and change state 'input' when typing
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}); // e.target.name == input
    };

// When the messages field is updated
    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];

        if (lastMessage.name !== BOT_NAME) {
            setTimeout(() =>
                    this.sendMessage(BOT_NAME, 'I will be back in a minute!'),
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