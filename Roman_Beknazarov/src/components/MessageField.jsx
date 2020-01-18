import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: ["Hello!", "How are you?"]
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1 ) {
            setTimeout(() =>
                this.setState({'messages': [ ...this.state.messages, "Don't bother me I'm a robot" ] }), 1000);
        }
    }

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