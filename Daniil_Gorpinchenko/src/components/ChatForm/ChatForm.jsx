import React from 'react';
import PropTypes from 'prop-types';

/**
 * Комонент по отрисовке поля с формой отправки нового сообщения
 * @param {string} message Текст сообщения
 * @param {string} name Имя отправителя
 * @param {function} onSendMessage Обработчик отправки нового сообщения
 */

export class ChatForm extends React.Component {
    state = {
        name: 'Ussser',
        content: 'Ma messssage'
    }
    textarea = React.createRef();
    componentDidMount() {
        this.textarea.current.focus();
    }
    handleInput = ({currentTarget: {value, name}}) => {
        //console.log(value);
        this.setState (() => ({[name]: value}))
    }
    handleClick = () => {
        const{name, content} = this.state;
        this.props.onSendMessage({name, content});
    }
    render () {
        return (<div>
            <input name="name" value={this.state.name} onChange={this.handleInput} type="text" />
            <textarea name="content" value={this.state.message} onChange={this.handleInput} ref={this.textarea} />
            <button onClick={this.handleClick}>Отправить</button>
        </div>
        )
    }
}

 /*
export const ChatForm = ({onSendMessage}) =>
    (<div>
        <input value={name} type="text"></input>
        <textarea value={message} />
        <button>Отправить</button>
    </div>);
*/

ChatForm.PropTypes = {
    onSendMessage: PropTypes.func.isRequired
}