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
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    {text:"Seneka", content: "Per aspera ad Astra"},
                    {text:"Descartes", content: "Cogito, ergo sum"},
                    {text:"God", content: "Lorem ipsum dolor"}
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {text:"Voenkomat", content: "Vam povestka! Zavtra yavites v raspredelitelniy punkt k 8 chasam"}
                ]
            },
            3: {
                name: 'Chat 3',
                messages: [

                ]
            }
        }


        // inputMessage: '',
        // inputName: ''
    }

    componentDidMount () {

    }

    componentDidUpdate () {
        const {chats} = this.state
        const {id} = this.props.match.params

        if (id && chats[id]) {
            const messages = this.state.chats[id].messages
            const lastMessage = messages[messages.length -1]
            
            if (lastMessage && lastMessage.text !== BOT_NAME) {
                setTimeout(() => this.handleSendMessage (id) ({text: BOT_NAME, content: `Здравствуйте! Вам предварительно одобрен кредит до ${id}00 тыс. руб. узнать подробности можно по ссылке`}), 1500)
                
            }
        }


    }

    handleSendMessage = (id) => (message) => {
        this.setState ((state) => (
            {
                chats: {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [
                            ...state.chats[id].messages,
                            message,
                        ]
                    }
                }
            }
    ));
    }

    render () {
        const {chats} = this.state
        const {id} = this.props.match.params

        if (id && chats[id]) {
            return <Chat {...{messages: chats[id].messages, sendMessage: this.handleSendMessage(id)}}/>
        } else {
            return <span>Выберите доступный чат</span>
        }

        
    }
}