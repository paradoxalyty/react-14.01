import React from "react";
import ReactDom from "react-dom";

// const messages = [
//     { name: "Ivan", content: "Hello!" },
//     { name: "Oleg", content: "Hi, how are you?" },
//     { name: "Ivan", content: "I am well" }
// ]

// const Message = ({ name, content }) => <div><strong>{name}:</strong> {content}</div>;
// // React.createElement("div", {}, [React.createElement("strong", {}, name), content])

// function MessageList({ messages }) {
//     return messages.map((message, index) => <Message {...message} key={index} />)
// }

// const Chat = (props) => {
//     const sendMessage = (event) => {
//         console.log("Button is clicked", event);
//         messages.push({ name: "Egor", content: "Hey! " +(new Date).valueOf() })
//         ReactDom.render(<Chat messages={messages} />, document.getElementById("root"));
//     }
//     return <>
//         <MessageList messages={props.messages} />
//         <input type="submit" value="New message" onClick={sendMessage}/>
//     </>
// }


// ReactDom.render(<Chat messages={messages} />, document.getElementById("root"));
import {Counter} from './components/Counter';
import { App } from "./components/App";
ReactDom.render(<App />, document.getElementById("root"));
// ReactDom.render(null, document.getElementById("root"));

// <Link title="Это ссылка" link="google.ru" />
// const Link = ({title, link}) => <a href={"https://" + link}>{title}</a>; // JSX
// return React.createElement("a", {"href": "https://" + props.link}, props.title); // No JSX
// React.createElement(Link, { title: "Это ссылка", link: "google.ru" })