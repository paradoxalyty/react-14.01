import ReactDOM from "react-dom";
import React from "react";
import MessageList from "./components/MessageList";

const messages = [
  { name: "Фёдор Михайлович", content: "Вацап май френд?" },
  { name: "Арсений", content: "Да помаленьку, всё нормально. Энд ю?" },
  { name: "Фёдор Михайлович", content: "Вот решил изучить РеактJS" },
  { name: "Арсений", content: "Чудить изволите, Фёдор Михайлович?" },
  { name: "Фёдор Михайлович", content: "Изволю, Сеня, юр гад дэм райт" }
];

ReactDOM.render(
  <MessageList messages={messages} />,
  document.getElementById("root")
);
