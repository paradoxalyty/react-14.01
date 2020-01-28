import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/**
 * Компонент по отрисовке поля с формой отправки нового сообщения
 * @param {string} message Текст сообщения 
 * @param {string} name Имя отправителя 
 * @param {Function} onSendMessage Обработчик отправки нового сообщения 
 */

// export class ChatForm extends React.Component {
//     state = {
//         name: 'User',
//         content: 'My message'
//     }
//     textarea = React.createRef();
//     componentDidMount() {
//         this.textarea.current.focus();
//     }
//     handleInput = ({currentTarget: {value, name}}) => {
//         this.setState(() => ({[name]: value}))
//     }
//     handleClick = () => {
//         const {name, content} = this.state;
//         this.props.onSendMessage({name, content});
//     }
//     render() {
//         return (<div>
//             <input name="name" value={this.state.name} onChange={this.handleInput} type="text" />
//             <textarea name="content" value={this.state.content} onChange={this.handleInput} ref={this.textarea}/>
//             <button onClick={this.handleClick}>Отправить</button>
//         </div>);
//     }
// }

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useState('User');
    const [content, setContent] = useState('My message');
    // const textarea = useRef(); ref={textarea}

    // useEffect(() => { 
    //     textarea.current.focus();
    // }, [])

    const handleClick = () => {
        onSendMessage({ name, content });
    }

    return (<div>
        <TextField
            variant="outlined"
            label="Автор"
            value={name}
            onChange={({ currentTarget: { value } }) => setName(value)}
            type="text" />
        <TextField
            variant="outlined"
            multiline
            autoFocus
            label="Сообщение"
            value={content}
            onChange={({ currentTarget: { value } }) => setContent(value)} />
        <Button onClick={handleClick} variant="contained" color="primary">Отправить</Button>
    </div>);
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}