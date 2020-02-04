import React, { Component } from "react"
import { Chat } from "../components/Chat/Chat"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {addMessage} from "../store/chatAction"

/**
 * Контейнер со стартовыми сообщениями, логикой бота и отправкой сообщения
 * @param {string} text Имя отправителя
 * @param {string} content Текст сообщения 
 */

const BOT_NAME = 'Bot'

//  class ChatContainer extends Component {
    // state = {
    //     chats: {
    //         1: {
    //             name: 'Chat 1',
    //             messages: [
    //                 {text:"Seneka", content: "Per aspera ad Astra"},
    //                 {text:"Descartes", content: "Cogito, ergo sum"},
    //                 {text:"God", content: "Lorem ipsum dolor"}
    //             ]
    //         },
    //         2: {
    //             name: 'Chat 2',
    //             messages: [
    //                 {text:"Voenkomat", content: "Vam povestka! Zavtra yavites v raspredelitelniy punkt k 8 chasam"}
    //             ]
    //         },
    //         3: {
    //             name: 'Chat 3',
    //             messages: [

    //             ]
    //         }
    //     }


        // inputMessage: '',
        // inputName: ''
    // }

    // componentDidMount () {
    //     this.props.loadChats ()
    // }

    // componentDidUpdate () {
        // const {chats} = this.state
        // const {id} = this.props.match.params

        // if (id && chats[id]) {
        //     const messages = this.state.chats[id].messages
        //     const lastMessage = messages[messages.length -1]
            
        //     if (lastMessage && lastMessage.text !== BOT_NAME) {
        //         setTimeout(() => this.handleSendMessage (id) ({
        //             text: BOT_NAME, 
        //             content: `Здравствуйте! Вам предварительно одобрен кредит до ${id}00 тыс. руб. узнать подробности можно по ссылке`
        //         }), 1500)
                
        //     }
        // }


    // }

    // handleSendMessage = (id) => (message) => {
    //     this.props.addMessage (id, message.text, message.content)
    //     this.setState ((state) => (
    //         {
    //             chats: {
    //                 ...state.chats,
    //                 [id]: {
    //                     name: state.chats[id].name,
    //                     messages: [
    //                         ...state.chats[id].messages,
    //                         message,
    //                     ]
    //                 }
    //             }
    //         }
    // ));
    // }

//     render () {
//         const {messages, id, addMessage} = this.props

//         if (messages) {
//             return <Chat {...{messages: messages, sendMessage: addMessage}}/>
//         } else {
//             return <span>Выберите доступный чат</span>
//         } 
//     }
// }

const mapStateToProps = ({chatReducer}, {match}) => {
    const id = match.params.id
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        // id
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({
        addMessage
    }, dispatch)
}

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id
    return {
        ...stateProps,
        sendMessage: ({text, content}) => dispatchProps.addMessage (id, text, content)
    }

}

export default connect (mapStateToProps, mapDispatchToProps, mergeProps) (Chat) 