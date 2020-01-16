import React from "react";
import ReactDom from "react-dom";

let messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well"}
]

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

function MessageList({messages}) {
    return messages.map((message, index) => <Message {...message} key={index}/>)
}

function sendMessage() {
    messages.push({name: "ChatBot", content: "test"});
    ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));
    console.log(messages);
}

document.getElementById('send').addEventListener('click', sendMessage);

ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));