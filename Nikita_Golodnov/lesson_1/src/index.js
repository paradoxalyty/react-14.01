import React from "react"
import ReactDom from "react-dom"

const messages = [
    {name:"Seneka", content: "Per aspera ad Astra"},
    {name:"Descartes", content: "Cogito, ergo sum"},
    {name:"God", content: "Lorem ipsum dolor"}
]

const MessageList = ({messages}) => {
    return messages.map((message, index) => <Message name={message.name} content={message.content} key={index} />) //{...message}
} 

const SendButton = () => <button>Нормально</button>

ReactDom.render(<MessageList messages={messages}/>, document.getElementById("app"))


