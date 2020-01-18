import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: ["Hello!", "How are you?"]
    };

    handleClick = () => {
        this.setState({messages: [ ...this.state.messages, "I am fine." ] });
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text={ text } />
        ));

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Send message</button>
        </div>
    }
}