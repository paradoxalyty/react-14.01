import React, { useState } from "react";
// import React, { useState, useRef, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './ChatForm.css';

/**
 *  Компонент с формой отправки нового сообщения
 *  @param {string} content - message text
 *  @param {string} name - sender name
 *  @param {string} time - sending message time
 *  @param {Function} onSendMessage - sending new message handler
 */
// export class ChatForm extends React.Component {
//     state = {
//         name: 'User',
//         content: 'My message',
//     }
//     textarea = React.createRef ();
//     componentDidMount () {
//         this.textarea.current.focus ();
//     }
//     handleInput = ({currentTarget: {value, name}}) => {
//         // event.currentTarget.value
//         this.setState(() => ({[name]: value}));
//     }
//     handleClick = () => {
//         const {name, content} = this.state;
//         const date = new Date ();
//         const time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
//         this.props.onSendMessage ({name, content, time});
//     }
//     render () {
//         return (<div>
//             <input name="name" value={ this.state.name } onChange={this.handleInput} type="text" />
//             <textarea name="content" value={ this.state.content} onChange={this.handleInput} ref={this.textarea}/>
//             <button onClick={this.handleClick}>Отправить</button>
//         </div>);
//     }
// }

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useState ('User');
    const [content, setContent] = useState ('Message');
    // const textarea = useRef ();

    // useEffect (() => {
    //     textarea.current.focus ();
    // }, []);

    const handleClick = () => {
        if (content.length > 0) {
            onSendMessage({name, content});
            setContent('');
        }
    }

    const handleKeyUp = (event) => {
        if (event.ctrlKey && event.key == "Enter") {
            handleClick();
        }
    }

    return (<div className="chatForm">
        <TextField
            className="chatFormUserName"
            label="Имя пользователя"
            variant="outlined"
            size="small"
            value={name}
            onChange={({currentTarget: {value}}) => setName (value)} />
        <TextField
            className="chatFormTextMessage"
            label="Текст (ctrl+Enter - для отправки)"
            variant="outlined"
            size="small"
            value={content}
            onChange={({currentTarget: {value}}) => setContent (value)}
            onKeyUp={handleKeyUp}
            // ref={textarea} 
            autoFocus
            multiline />
        <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleClick}>Отправить</Button>
    </div>)
};

ChatForm.propTypes = {
    // content: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // time: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired,
}