import React from "react";
import ReactDom from "react-dom";

const messages = [
  {name: "ivan", content: "Hello!"},
  {name: "ivan", content: "Hello!"},
  {name: "ivan", content: "Hello!"}
]

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;  
const MessageList = ({messages}) => {
  return messages.map((message) => <Message name={message.name} content={message.content}/>)

}


ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));