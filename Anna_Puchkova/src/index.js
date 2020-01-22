import React from "react";
import ReactDom from "react-dom";
//import { messages } from './components/Message';
import App from './components/MessageField';
//import { Counter } from './components/Counter';
//import { App } from './components/App';
/*
ReactDom.render(
<MessageList messages={messages}/>, 
document.getElementById("root")
);
//const Button = () => <button onClick={sendMessage}>Add Message</button>;

export const Chat = (props) => {
    return <>
        <MessageList messages={messages}/>
        <input type="submit" value="New message" onClick={sendMessage}/>
    </>
}*/

ReactDom.render(
    <App/>, 
    document.getElementById("root")
    );

    