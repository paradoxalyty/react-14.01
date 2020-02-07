import React from 'react'
import {Message} from '../Message/Message'
import PropTypes from 'prop-types'
import './MessageList.css'

export const MessageList = ({ messages }) =>
    (<div className='MessageList'>
        {messages.map ((message, index) => (<Message key = {index} {...message} /> ))}
    </div>)

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}

// export class MessageList extends Component {
//     componentDidUpdate () {
//         if (this.state.messages.length % 2 === 1) {
//             setTimeout (() =>
//             this.setState ({
//                 messages: [...this.state.messages, {name: 'Bot', content: 'Ты никогда не изучишь React!!1, кожаный мешок'}]
//             }), 1000)
//         }
//     }
//     handleClick = () => {
//         this.setState({messages: [...this.state.messages, {name: 'User', content: 'Нормально'}]})
//     } 
//     render () {
//         const messageElements = this.state.messages.map ((text, index) => (
//         <Message key = {index} text = {text.name} content = {text.content} /> )) 
//         return <div>
//         {messageElements}
//         <button onClick = {this.handleClick}> Отправить сообщение </button>
//         </div>
//     }
// }