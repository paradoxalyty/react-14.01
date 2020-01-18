import React from "react";
import ReactDom from "react-dom";
//import App from "./components/MessageField";
import { Counter } from "./components/Counter";

ReactDom.render(
    //<App/>,
    <Counter/>,
    document.getElementById('root'),
);


/*

const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are You?"},
    {name: "Ivan", content: "I am fine."}
];

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;
const MessageList = ({messages}) => {
    return messages.map((message, index) => <Message {...message} key={index}/>)
    /!*
    return messages.map((message, index) => <Message name={message.name} content={message.content} key={index}/>)
    *!/
    };

ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));
/!*
//with JSX
const Link = ({title, link}) => <a href={"https://" + link}>{title}</a>;
ReactDom.render(<Link title="This is a link" link="google.ru" />, document.getElementById("root"));
// without JSX
return React.createElement("a", {"href": "https://" + props.link}, props.title);
ReactDom.render(React.createElement(Link, {title: "This is a link", link: "google.ru"}), document.getElementById("root"));
*!/
*/
