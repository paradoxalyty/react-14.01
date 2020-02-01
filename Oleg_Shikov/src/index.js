import React from "react";
import ReactDom from "react-dom";

// const messages = [
//     { name: "Ivan", content: "Hello!" },
//     { name: "Oleg", content: "Hi, how are you?" },
//     { name: "Ivan", content: "I am well" }
// ]

// Компоненты с логикой = контейнеры  - оборачивают, содержат глупые компонеты
// Компоненты с версткой = "глупые" / компоненты

import { App } from "./App";
ReactDom.render(<App />, document.getElementById("root"));
// ReactDom.render(null, document.getElementById("root"));

// <Link title="Это ссылка" link="google.ru" />
// const Link = ({title, link}) => <a href={"https://" + link}>{title}</a>; // JSX
// return React.createElement("a", {"href": "https://" + props.link}, props.title); // No JSX
// React.createElement(Link, { title: "Это ссылка", link: "google.ru" })

// const obj1 = {
//     a: 1,
//     b: 2,
//     arr: ['h', 'i'],
//     innerObj: {test: "hello!"},
// }

// // const obj2 = Object.assign({}, obj1);
// const obj2 = {...obj1, arr: [...obj1.arr]}
// // const obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.a = 3;
// obj2.arr[0] = 'H';

// console.log("obj1", obj1);
// console.log("obj2", obj2);