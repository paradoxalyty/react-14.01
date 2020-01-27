import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {H1} from './components/H1';
import {Button} from './components/Button';
// import {Counter} from './components/Counter';
import {MessageList} from './components/MessageList';
import {Link} from './components/Link';
import {Input} from './components/Input';
import '../css/styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Texts (translation)
const texts = {
    h1Text: 'ReactJS Messenger',
    buttonText: 'Send',
};

// Messages
const messages = [
    {name: 'Me', content: 'Good afternoon!'},
    {name: 'Me', content: 'How are you?'},
    {name: 'Me', content: 'Can you help me please?'},
];

// Messenger Class
class Messenger extends Component {
    state = {
        messages: messages,
        input: '',
    };

    newMessages = 0;
    totalMessages = messages.length;

    // Add a new message
    sendMessage = (name, content) => {
        this.setState((state) => ({
            messages: [...state.messages, {name: name, content: content}],
            input: '',
        }));
    };

    // Update messages counter
    updateCounter(counter) {
        this[counter] = this[counter] + 1;
    };

    // Button send message handler
    handleButton = (message) => {
        this.updateCounter('newMessages');
        this.updateCounter('totalMessages');
        this.sendMessage('Me', message);
    };

    // Send message by Enter
    handleKeyUp = (e, message) => {
        if (e.keyCode === 13) {
            this.sendMessage('Me', message);
        }
    };

    // Get input value (message) when typing
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}); // e.target.name == input
    };

    // When the Messenger is updated
    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].name === 'Me') {
            setTimeout(() =>
                    this.sendMessage('Support', 'I will be back in a minute!'),
                300);
            this.updateCounter('newMessages');
            this.updateCounter('totalMessages');
        }

        console.log(this.state.messages); // Debug
    }

    // Rendering the Messenger component
    render() {
        const {messages} = this.state;

        return (
            <div className="react-messenger__wrapper">
                <H1 h1Text={texts.h1Text}/>

                <div className="react-messenger__layout">
                    <div className="react-messenger__messages-list">
                        <MessageList messages={messages}/>
                    </div>

                    <Input handleKeyUp={this.handleKeyUp}
                           handleChange={this.handleChange}
                           input={this.state.input}/>

                    <Button buttonText={texts.buttonText}
                            handleButton={this.handleButton}
                            input={this.state.input}/>

                    <Link newMessages={this.newMessages}
                          totalMessages={this.totalMessages}/>
                </div>
            </div>
        )
    }
}

// Rendering app to root node
ReactDOM.render(
    <MuiThemeProvider>
        <Messenger/>
    </MuiThemeProvider>,
    document.getElementById('root'),
);