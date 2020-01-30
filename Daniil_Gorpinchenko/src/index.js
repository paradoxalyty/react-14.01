import React from "react";
import ReactDom from "react-dom";

/*
const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi! How are you?"},
    {name: "Ivan", content: "Im fine!"}
]



// *** Компоненты с логикой = контейнеры - оборачивают, содержат "глупые компоненты" ***
// *** Компоненты с версткой = "глупые компоненты" ***


//const root = docuument.getElementById("root");
//console.warn("Привет! Сейчас",(new Date).valueOf());
*/

//import {Counter} from "./components/Counter";
import { App } from "./containers/App";
//import MessageField from "./components/MessageField/MessageField";

//ReactDom.render(<App />, document.getElementById("root"));
ReactDom.render(<App />, document.getElementById("root"));
