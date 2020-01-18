import React from "react";
import ReactDom from "react-dom";
import MessageList from "./components/MessageField.js"

let messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well"}
]

function sendMessage() {
    messages.push({name: "ChatBot", content: "test"});
    ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));
    console.log(messages);
}

document.getElementById('send').addEventListener('click', sendMessage);

ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));