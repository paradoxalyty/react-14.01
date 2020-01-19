import ReactDom from 'react-dom';
import React from 'react';

const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "NeIvan", content: "Hello2!"},
]

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>

const MessageList = ({messages}) => {
    return messages.map((message, index) => <Message {...message} key={index}/>)
}

ReactDom.render(<MessageList messages={messages} />, document.getElementById('root'));