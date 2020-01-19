import React from "react";
import ReactDom from "react-dom";
import { MessageList } from './MessageList.jsx';

let authorName = 'admin';

const ButtonSend = (messages) => {
    return <button onClick={sendMessage.bind (messages)}>Send</button>;
}

function sendMessage () {
    this.messages.push ({name: authorName, content: "Normal'no"});    
    ReactDom.render (<MessageList messages={ this.messages } />, document.getElementById ('root'));
}

export { ButtonSend };