import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import TextField from '@material-ui/core/TextField';
import "./NewMessage.css";

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
        '& > .fa': {
          margin: theme.spacing(2),
        },
      },
  }));

/**
 * Компонент отрисовки формы для ввода нового сообщения
 * @param {string} message - текст сообщения
 * @param {string} name - имя автора сообщения
 * @param {Function} onSubmitMessage - Функция оработчик события подтверждения отправки нового сообщения
 */
export const NewMessage =({onSubmitMessage}) => {
    const [name, setName] = useState('User');
    const [message, setMessage] = useState('My message');
    const [msgClass, setMsgClass] = useState('guest');

    const classes = useStyles();

    const textarea = useRef();

    useEffect(()=>{
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
          );
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        onSubmitMessage({msgClass, name, message});
        setMessage("");
        textarea.current.focus();
    };

    return <form onSubmit={sendMessage} className="newMessageForm">
                <label>
                    <TextField 
                        id="outlined-basic" 
                        label="Имя" 
                        variant="outlined" 
                        value={name} 
                        onChange={({currentTarget: {value}})=>setName(value)} 
                        className="newMessageForm__nameInput" 
                    />
                    <strong className="newMessageForm__doublepoints">: </strong>
                    <TextField 
                        className="newMessageForm__messageInput" 
                        id="outlined-basic1" 
                        label="Сообщение" 
                        variant="outlined" 
                        value={message} 
                        onChange={({currentTarget: {value}})=>setMessage(value)}
                        multiline 
                        autoFocus 
                        ref={textarea}
                    />
                </label>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button + " newMessageForm__button"}
                    endIcon={<Icon className="fa fa-paper-plane"></Icon>}
                    onClick={sendMessage}>Отправить
                </Button>
            </form>
};

NewMessage.propTypes={
    onSubmitMessage: PropTypes.func.isRequired
}
//  {
//     constructor(props){
//         super(props);
//         this.state = {value: ""};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//     handleSubmit(event){
//         let newMsjObj = {msgClass: "guest", name: "Я", content: this.state.value};
//         this.props.addMessage(newMsjObj);
//         this.setState({value: ""});

//         event.preventDefault();
//     }
//     render() {
//         return 
//         //return <div>Hello</div>
//     }
//     /*render() {
//         return <form className="newMessageForm"><input className="messageInput" value={this.state.value} onChange={this.handleChange} /><input type="submit" value="Отправить" className="submitBtn" /></form>
//         //return <div>Hello</div>
//     }*/
// }