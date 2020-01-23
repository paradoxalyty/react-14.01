import React, {Component} from "react"
import {Message} from './Message'

export class MessageList extends Component {
    state = {
        messages: [
            {name:"Seneka", content: "Per aspera ad Astra"},
            {name:"Descartes", content: "Cogito, ergo sum"},
            {name:"God", content: "Lorem ipsum dolor"}
        ]
    } 
    componentDidUpdate () {
        if (this.state.messages.length % 2 === 1) {
            setTimeout (() =>
            this.setState ({
                messages: [...this.state.messages, {name: 'Bot', content: 'Ты никогда не изучишь React!!1, кожаный мешок'}]
            }), 1000)
        }
    }
    handleClick = () => {
        this.setState({messages: [...this.state.messages, {name: 'User', content: 'Нормально'}]})
    } 
    render () {
        const messageElements = this.state.messages.map ((text, index) => (
        <Message key = {index} text = {text.name} content = {text.content} /> )) 
        return <div>
        {messageElements}
        <button onClick = {this.handleClick}> Отправить сообщение </button>
        </div>
    }
}