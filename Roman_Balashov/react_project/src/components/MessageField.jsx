import React, {Component} from 'react';
import {Message} from './Message';
import '../style';

export class MessageField extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="message-field">
            {this.props.messages.map((message, index) => <Message {...message} key={index} />)}
        </div>
    }
}