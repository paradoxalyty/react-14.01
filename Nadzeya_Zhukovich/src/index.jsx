import React from "react";
import ReactDom from "react-dom";
import {MessageList} from "./components/MessageList";
import {MessageField} from "./components/MessageField";

const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you!"},
    {name: "Ivan", content: "I am ok!"},
];

ReactDom.render(
    <>
        <MessageList arrayMessages={messages}/>
        <MessageField/>
    </>,
    document.getElementById("root")
);

