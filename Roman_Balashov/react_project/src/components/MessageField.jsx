import React, {Component} from 'react';
import {Message} from './Message';

export class MessageField extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.messages.map((message, index) => <Message {...message} key={index} />)
    }
}