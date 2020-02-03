import React, {useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import SendIcon from 'material-ui/svg-icons/content/send';
import TextField from '@material-ui/core/TextField';
import './ChatForm.css'

// используем HOOKS
export const ChatForm = ({onSendMessage}) => {

    const [author] = useState('Me');
    const [content, setContent] = useState('');
    let textInput = useRef(null);

    const handleClick = () => {
        onSendMessage({author, content});
        textInput.current.value = "";
    };

    const handleKeyUp = (event, message) => {
        if(event.shiftKey && event.keyCode === 13) {
            console.log('shift+enter');
        }else if(event.keyCode === 13) {
            handleClick(message);
        }
    };

    return (<div className="user-message" >
        <TextField label="Your message"
                   fullWidth={true}
                   autoFocus
                   multiline
                   inputRef={textInput}
                   defaultValue={content}
                   onChange={({currentTarget: {value}}) => setContent(value)}
                   onKeyUp={(event) => handleKeyUp(event, content)}
        />
        <Fab onClick={handleClick}>
            <SendIcon/>
        </Fab>
    </div>);
};

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};

/*
  // используем CLASS
export class ChatForm extends React.Component {
    state = {
        author: 'User',
        content: 'My message',
    };

    textarea = React.createRef();  //Вешаем фокус на поле ввода
    componentDidMount() {
        this.textarea.current.focus();  //Вешаем фокус на поле ввода
    }

    handleInput = ({currentTarget: {value, name}}) => {  //event.currentTarget.value
        this.setState(() => ({[name]: value}))
    };

    handleClick = () => {
      const {author, content} = this.state;
      this.props.onSendMessage({author, content});
    };

    render() {
        return (<div>
            <input name="author" value={this.state.author} onChange={this.handleInput} type="text"/>
            <textarea name="content" value={this.state.content} onChange={this.handleInput} ref={this.textarea}/>  {/!* ref={this.textarea} - Вешаем фокус на поле ввода *!/}
            <button onClick={this.handleClick}>Send</button>
        </div>);
    }
}*/