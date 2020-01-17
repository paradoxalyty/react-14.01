import React from "react";
import ReactDom from "react-dom";
import Message from "./component/message/message"

const messages = [
    {name:"Ivan", content:"Hi!"},
    {name:"Alecsander", content:"Hi"},
    {name:"Oleg", content:"Hi!"},  
]

// const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

// const MessageList = ({messages}) => {
//     return messages.map((message) => <Message name={message.name} content={message.content}/>)
// }

ReactDom.render(<MessageList messages={messages}/>,document.getElementById("root"));
