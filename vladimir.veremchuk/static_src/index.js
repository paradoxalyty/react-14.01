import React from "react";
import ReactDom from "react-dom";

const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well"}
]

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

function MessageList({messages}) {
    return messages.map((message, index) => <Message {...message} key={index}/>)
}

ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));