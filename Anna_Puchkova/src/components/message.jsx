import React from "react";
import ReactDom from "react-dom";

 
export const messages = [
    {name: "Anna", content: "Hello!"},
    {name: "Nick", content: "Hi, how are you?"},
    {name: "Anna", content: "I am well"}
];

export const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;