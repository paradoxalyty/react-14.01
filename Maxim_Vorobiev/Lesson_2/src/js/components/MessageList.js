import React from 'react';
import Message from './Message';


export default class MessageList extends React.Component {
    render() {
        const messageList = this.props.messages.map((message, index) => (
            <Message key={index} name={message.name} content={message.content}/>
        ));

        return (
            <div id="messages">
                {messageList}
            </div>
        )
    }
}