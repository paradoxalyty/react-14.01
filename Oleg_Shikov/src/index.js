import React from "react";
import ReactDom from "react-dom";

// const messages = [
//     { name: "Ivan", content: "Hello!" },
//     { name: "Oleg", content: "Hi, how are you?" },
//     { name: "Ivan", content: "I am well" }
// ]

// Компоненты с логикой = контейнеры  - оборачивают, содержат глупые компонеты
// Компоненты с версткой = "глупые" / компоненты

import { App } from "./containers/App";
ReactDom.render(<App />, document.getElementById("root"));
// ReactDom.render(null, document.getElementById("root"));

// <Link title="Это ссылка" link="google.ru" />
// const Link = ({title, link}) => <a href={"https://" + link}>{title}</a>; // JSX
// return React.createElement("a", {"href": "https://" + props.link}, props.title); // No JSX
// React.createElement(Link, { title: "Это ссылка", link: "google.ru" })