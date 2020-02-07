import './ChatForm.css'


import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * Компонент по отрисовке поля с формой отправки нового сообщения
 * @param {string} message Текст сообщения
 * @param {string} name Имя отправителя
 * @param {Function} onSendMessage Обработчик отправки нового сообщения 
 */
export class ChatForm extends Component {
    state = {
        chats: {
            ' ': {
                name: ' ',
                messages: [
                    {
                        name: " ",
                        content: " " 
                    }              
                ]
            },
        }  
    }
    textarea = React.createRef();
    componentDidMount() {
        this.textarea.current.focus();
    };
    /**
     * @param {string}
     */
    hendleInput = ({currentTarget: {value, name}}) => {
        this.setState(()=>({[name]: value}))
    }
    
    handleClick = () => {
        const { name, content, } = this.state
        this.props.onSendMessage( { name, content } )
    }
    
    render() {
        const { placeholderName, placeholderMessage, placeholderAddChat } = this.props
        return(
            <div className="ChatForm">
                <input 
                    className="ChatForm-input"
                    name="name"
                    onChange={this.hendleInput}
                    placeholder={placeholderName}
                    type="text" 
                    value={this.state.name} 
                />
                <textarea 
                    className="ChatForm-input ChatForm-textarea"
                    name="content"
                    onChange={this.hendleInput}
                    placeholder={placeholderMessage}
                    ref={this.textarea}
                    value={this.state.content} 
                />
                <button 
                    className="button"
                    onClick={this.handleClick}
                >Отправить</button>
                <input 
                    className="ChatForm-input"
                    name="Chat"
                    onChange={this.hendleInput}
                    placeholder={placeholderAddChat}
                    type="text" 
                    value={this.state.name} 
                />
                <button 
                    className="button"
                    onClick={this.handleClick}
                >Добавить чат</button>
            </div> 
        )
    }

}
// export const ChatForm = ({ message, name, onSendMessage }) => 
// (<div>
//     <input value={name} type="text" />
//     <textarea value={message} />
//     <button>Отправить</button>
// </div>);

ChatForm.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired,
}