import React from "react";
import ReactDom from "react-dom";
import { MessageField } from "./components/MessageField";

const messages = [
  { name: "Иван", content: "Привет!" },
  { name: "Петр", content: "Привет, как дела?" },
  { name: "Иван", content: "Хорошо, спасибо." }
];

ReactDom.render(
  <MessageField messages={messages} />,
  document.getElementById("root")
);
