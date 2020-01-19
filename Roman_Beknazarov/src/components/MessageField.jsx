import React, { Component } from 'react';
import { Message } from './Message';

export class MessageField extends Component {
    state = {
        messages: [
            {name: "Ivan", content: "Hello!"},
            {name: "Mary", content: "Hi, how are You?"},
            {name: "Ivan", content: "I am fine."}
        ],
    };

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 === 0 ) {
            setTimeout(() =>
                this.setState({'messages': [ ...this.state.messages, {name: "Robot", content: "Don't bother me I'm a robot"} ] }), 1000);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    sendMessage = () => {
        this.setState({messages: [ ...this.state.messages, {name: "Mary", content: "Where is Robot?"} ] });
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text={ text.name } content={text.content} />
        ));

        return <div>
            { messageElements }
            <br/>
            <button onClick={ this.sendMessage }>Send</button>
        </div>
    }
}