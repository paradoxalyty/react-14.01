import React from 'react';
import ReactDOM from 'react-dom';

import H1 from './components/H1';
import Button from './components/Button';
import Counter from './components/Counter';
import MessageList from './components/MessageList';

// Texts (translation)
const texts = {
    h1Text: 'ReactJS Messenger',
    buttonText: 'Send Message',
};

// Messages
let messages = [
    {name: 'Max', content: 'How are you?'},
    {name: 'Dolly', content: 'Fine, thanks. And you?'},
    {name: 'Max', content: 'I\'m fine :) Bye!'},
    {name: 'Dolly', content: 'See you!'},
];

// Messenger Class
class Messenger extends React.Component {
    state = {
        newMessages: 0,
        totalMessages: messages.length,
        messages: messages,
    };

    sendMessageClick = () => {
        this.setState({'newMessages': this.state.newMessages + 1});
        this.setState({'totalMessages': this.state.totalMessages + 1});

        this.setState({
            messages:
                [...this.state.messages, {name: 'Noname', content: 'Everything is okay'}]
        });
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => this.setState({
                messages:
                    [...this.state.messages, {name: 'Robot', content: 'Get lost Dude!'}]
            }), 1000);
        }
        console.warn(this.state.messages);
    }

    render() {
        return (
            <div className="react-wrapper">
                <H1 h1Text={texts.h1Text}/>

                <MessageList messages={this.state.messages}/>

                <Button buttonText={texts.buttonText}
                        newMessages={this.state.newMessages}
                        sendMessageClick={this.sendMessageClick}/>

                <Counter newMessages={this.state.newMessages}
                         totalMessages={this.state.totalMessages}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Messenger/>,
    document.getElementById('root'),
);