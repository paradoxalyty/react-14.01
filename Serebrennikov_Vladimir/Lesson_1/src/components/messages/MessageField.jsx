import React, {Component} from "react";
import Message from "./Message.jsx"
import ButtonSend from "./ButtonSend.jsx"
import InputMessage from "./InputMessage.jsx"

const messages = [
  {name: "Alex", content: "Как дела?"},
  {name: "Serg", content: "Ноомально. Как у тебя?"},
  {name: "Alex", content: "Тоже."}
]

export default class MessageField extends Component {
  render() {
    return (
      <div>
        {messages.map((message, index) => <Message {...message} key={index}/>)}
        <InputMessage />
        <ButtonSend />
      </div>
    )
  }
}