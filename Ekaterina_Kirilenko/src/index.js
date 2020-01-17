import React from "react";
import ReactDom from "react-dom";

const messages = [
  {name: "Katya", content: "Hello!"},
  {name: "Maksim", content: "Hi!"},
  {name: "Katya", content: "How are you?"},
];

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

const MessageList = ({messages}) => {
  return messages.map((message, index) => (
    <Message {...message} key={index} /> //если св-ва одинаковые
    // <Message name={message.name} content={message.content} key={index} />
  ));
}

const Button = <button>Отправить</button>;

ReactDom.render(
    [
    <MessageList messages={messages} />, 
    Button
  ], 
  document.getElementById("root")
);


// <Link title="Привет! Это ссылка" link="google.com" />
// const Link = ({ title, link }) => <a href={"https://" + link}>{title}</a>;
// const element = <h1 className="element">Мы подключили React</h1>;