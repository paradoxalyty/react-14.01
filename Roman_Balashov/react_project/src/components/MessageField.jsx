import React from 'react';
import Message from './Message.jsx';

class MessageField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.messages.map((message, index) => <Message {...message} key={index} />)
    }
}


export default MessageField;