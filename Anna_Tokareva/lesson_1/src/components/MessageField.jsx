import React from "react";
import ReactDom from "react-dom";
import { MessageList } from "./MessageList";

export const MessageField = ({ messages }) => {
  const fixedMessage = {
    name: "Я",
    content: "Привет!!!"
  };
  function sendFixedMessage() {
    messages.push(fixedMessage);
    ReactDom.render(
      <MessageField messages={messages} />,
      document.getElementById("root")
    );
  }
  return (
    <div>
      <MessageList messages={messages} />
      <button onClick={sendFixedMessage}>Сказать "Привет!!!"</button>
    </div>
  );
};
