import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import MessageList from "./components/MessageList";

const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well1"},
];

//const Message = ({name, content}) => <div><strong>{name}: </strong>{content}</div>;
//const MessageList = ({messages}) => messages.map((message, i) => <Message {...message} key={i}/>);

ReactDom.render(<MessageList />, document.getElementById("root"));
// ReactDom.render(<App />, document.getElementById("root"));

//<MessageList messages={messages} />
//<Link title="link text11" link="google.ru"/>
//const Link = ({title, link}) => <a href={"https://" + link}>{title}</a>;
//React.createElement(Link, {title: "link text11", link: "google.ru"}