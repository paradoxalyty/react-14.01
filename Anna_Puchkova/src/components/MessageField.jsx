import React from "react";
import ReactDom from "react-dom";
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { text: "Hello!", sender: 'robot' }, 
            { text: "How are you?", sender: 'robot' }
        ],
        answer: {text: 'I am Robot and I am happy!', sender: 'robot'},
        myAnswer: {text: 'I am OK. And you?', sender: 'me'}
    };
    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() =>
                    this.setState({
                        messages: [ ...this.state.messages, {text: this.state.answer.text, sender: this.state.answer.sender} ] }),
                1000);
        }
    }
 
    handleClick = () => {
        this.setState(({messages}) => ({ messages: [ ...messages, {text: this.state.myAnswer.text, sender: this.state.myAnswer.sender} ] }));
    };
 
    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } sender = { message.sender } text={ message.text } />));
 
        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Send Message</button>
        </div>
 
    }
 }
 