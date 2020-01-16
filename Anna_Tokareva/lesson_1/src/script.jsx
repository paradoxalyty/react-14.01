import React from "react";
import ReactDom from "react-dom";

const messages = [
  { name: "Иван", content: "Привет!" },
  { name: "Петр", content: "Привет, как дела?" },
  { name: "Иван", content: "Хорошо, спасибо." }
];

const fixedMessage = {
  name: "Я",
  content: "Привет!!!"
};

function sendFixedMessage() {
  messages.push(fixedMessage);
  ReactDom.render(<MessageField />, document.getElementById("root"));
}

const Message = ({ name, content }) => (
  <div>
    <strong>{name}: </strong>
    {content}
  </div>
);

const MessageList = ({ messages }) => {
  return messages.map((message, index) => (
    <Message name={message.name} content={message.content} key={index} />
  ));
};

const ButtonSendFixedMessage = () => (
  <button onClick={sendFixedMessage}>Сказать "Привет!!!"</button>
);

const MessageField = () => (
  <div>
    <MessageList messages={messages} />
    <ButtonSendFixedMessage />
  </div>
);

ReactDom.render(<MessageField />, document.getElementById("root"));
