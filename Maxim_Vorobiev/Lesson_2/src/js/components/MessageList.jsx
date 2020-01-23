import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Message} from './Message';

export class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
    };

    render() {
        const messageList = this.props.messages.map((message, index) => (
            <Message key={index} name={message.name} content={message.content}/>
        ));

        return (
            <>
                {messageList}
            </>
        )
    }
}