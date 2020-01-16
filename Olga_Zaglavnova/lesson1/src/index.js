import React from "react";
import ReactDom from "react-dom";
import MessageList from './components/messageList';
import NewMessage from "./components/newMessage";

const messages = [{name: "One", content: "1"}, {name: "Two", content: "2"}];

ReactDom.render(<MessageList messages={messages} />, document.getElementById("root"));
//ReactDom.render(<NewMessage />, document.getElementById("root"));