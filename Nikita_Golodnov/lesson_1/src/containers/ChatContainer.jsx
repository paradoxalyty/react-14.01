import React, { Component } from "react"
import { Chat } from '../components/Chat/Chat'

/**
 * Контейнер со стартовыми сообщениями, логикой бота и отправкой сообщения
 * @param {string} text Имя отправителя
 * @param {string} content Текст сообщения 
 */

const BOT_NAME = 'Bot'

export class ChatContainer extends Component {
    state = {
        messages: [
            {text:"Seneka", content: "Per aspera ad Astra"},
            {text:"Descartes", content: "Cogito, ergo sum"},
            {text:"God", content: "Lorem ipsum dolor"}
        ],
        // inputMessage: '',
        // inputName: ''
    }

    componentDidUpdate () {
        const lastMessage = this.state.messages[this.state.messages.length -1]

        if (lastMessage.text !== BOT_NAME) {
            setTimeout(() => this.handleSendMessage ({text: BOT_NAME, content: 'I\'m bot! bzzz'}), 1500)
            
        }
    }

    handleSendMessage = (message) => {
        this.setState ((state) => ({messages: [...state.messages, message]}))
    }

    render () {
        const {messages} = this.state
        return <Chat {...{messages, sendMessage: this.handleSendMessage}}/>
    }
}