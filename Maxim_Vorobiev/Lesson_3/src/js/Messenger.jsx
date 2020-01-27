import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {H1} from './components/H1';
import {Button} from './components/Button';
import {Counter} from './components/Counter';
import {MessageList} from './components/MessageList';

// Texts (translation)
const texts = {
    h1Text: 'ReactJS Messenger',
    buttonText: 'Send Message',
};

// Messages
const messages = [
    {name: 'Max', content: 'How are you?'},
    {name: 'Dolly', content: 'Fine, thanks. And you?'},
    {name: 'Max', content: 'I\'m fine :) Bye!'},
    {name: 'Dolly', content: 'See you!'},
];

// Messenger Class
class Messenger extends Component {
    state = {
        messages: messages,
        isUserMessage: false
    };

    newMessages = 0;
    totalMessages = messages.length;

    // Add a new message
    addMessage = (name, content) => {
        this.setState((state) => (
            {messages: [...state.messages, {name: name, content: content}]}
        ));
    };

    // Update messages counter
    updateCounter(counter) {
        this[counter] = this[counter] + 1;
    };

    // Button handler
    sendMessageClick = () => {
        this.updateCounter('newMessages');
        this.updateCounter('totalMessages');
        this.addMessage('Noname', 'Everything is okay');
        this.setState((state) => ({isUserMessage: true}));
    };

    // When the Messenger is updated
    componentDidUpdate() {
        if (this.state.isUserMessage === true) {
            setTimeout(() => this.addMessage('Robot', 'Get lost!'), 300);
            this.updateCounter('newMessages');
            this.updateCounter('totalMessages');
            this.setState((state) => ({isUserMessage: false}));
        }

        console.log(this.state.messages); // Debug
    }

    // Rendering the Messenger component
    render() {
        const {messages} = this.state;

        return (
            <div className="react-wrapper">
                <H1 h1Text={texts.h1Text}/>

                <Counter newMessages={this.newMessages}
                         totalMessages={this.totalMessages}/>

                <Button buttonText={texts.buttonText}
                        sendMessageClick={this.sendMessageClick}/>

                <MessageList messages={messages}/>
            </div>
        )
    }
}

// Rendering app to root node
ReactDOM.render(
    <Messenger/>,
    document.getElementById('root'),
);