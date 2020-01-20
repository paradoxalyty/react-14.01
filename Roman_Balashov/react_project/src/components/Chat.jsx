import React, { Component } from 'react';
import { MessageField } from './MessageField';
import { Button } from './Button';

export class Chat extends Component {
    state = {
        messages: [],
        count: 0
    }
    constructor(props) {
        super(props);
    }
    onStateChange = () => {
        const message = { name: "cat", text: "meow" };
        this.setState(({ messages, count }) => ({
            messages: [...messages, message],
            count: count + 1
        }));
    }
    componentDidUpdate(prevState) {
        if (this.state.messages[this.state.count - 1].name !== "robot") {
            const message = { name: "robot", text: "bzz" };
            setTimeout(() => {
                this.setState(({ messages, count }) => ({
                    messages: [...messages, message],
                    count: count + 1
                }))
            }, 1000);
        }
    }
    render() {
        return <>
            <MessageField className="message-field" messages={this.state.messages} />
            <Button onStateChange={this.onStateChange} />
        </>
    }
}