import React from "react";
import ReactDom from "react-dom";
import {MessageField} from "./components/MessageField/MessageField";
import './styles.css'

const start_messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well"}
];

ReactDom.render(<MessageField messages={start_messages}/>, document.getElementById("root"));