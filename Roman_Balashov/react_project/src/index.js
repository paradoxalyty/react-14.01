import React from 'react';
import ReactDOM from 'react-dom';

const messages = [
    {name:"dog", text:"bark"},
    {name:"cat", text:"meow"} 
];

const Message = ({name, text}) => (<div className="message">{name}: {text}</div>);

const MessageField = ({messages}) => messages.map((message, index) => <Message {...message} key={index}/>);

ReactDOM.render(<MessageField messages={messages} />,
    document.getElementById('root'));