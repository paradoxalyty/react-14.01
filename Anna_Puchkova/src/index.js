import React from "react";
import ReactDom from "react-dom";
import { MessageList } from './components/messageList';
import { messages } from './components/message';
import { sendMessage } from './components/messageList';

ReactDom.render(
<MessageList messages={messages}/>, 
document.getElementById("root")
);

const Button = () => <button onClick={sendMessage}>Add Message</button>;

ReactDom.render(
    <Button/>, 
    document.getElementById("button")
    );

