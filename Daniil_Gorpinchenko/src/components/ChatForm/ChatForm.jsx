import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * Комонент по отрисовке поля с формой отправки нового сообщения
 * @param {string} message Текст сообщения
 * @param {string} name Имя отправителя
 * @param {function} onSendMessage Обработчик отправки нового сообщения
 */

 /*
//***Компонент написан на классах

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
*/

 //***Компонент на хуках
export const ChatForm = ({onSendMessage}) => {
    const [name, setName] = useState ('User');
    const [content, setContent] = useState ('My hook message');
    const textarea = useRef();

    useEffect(() => {
        textarea.current.focus();
    }, [])

    const handleClick = () => {
        onSendMessage({name, content});
    }

    return (<div>
        <input value={name} onChange={({currentTarget: {value}}) => setName(value)}  type="text" />
        <textarea value={content} onChange={({currentTarget: {value}}) => setContent(value)} ref={textarea} />
        <button onClick={handleClick}>Отправить</button>
    </div>);
}


ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}