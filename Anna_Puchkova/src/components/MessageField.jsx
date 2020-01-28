import React from "react";
import ReactDom from "react-dom";
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    state = {
        messages: [
            { text: "Hello!", sender: 'robot' }, 
            { text: "How are you?", sender: 'robot' }
        ],
        answer: {text: 'I am Robot and I am happy!', sender: 'robot'},
        input: '',
    };

    componentDidMount() {
        this.textInput.current.focus();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length &&
            this.state.messages[this.state.messages.length - 1].sender !== 'robot') {
            setTimeout(() =>
                    this.setState({
                        messages: [ ...this.state.messages, {text: this.state.answer.text, sender: this.state.answer.sender} ],
                    }),1000);
        }      
    }
 
    handleClick = (message) => {
       this.sendMessage(message);
    };
 
    handleChange = (event) => {
        this.setState({ input: event.target.value });
     }; 

     handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message);
        }
     }
     sendMessage = (message) => {
        this.setState({ 
            messages: [ ...this.state.messages, {text: message, sender: 'me'} ],
            input: '',
        });
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } sender = { message.sender } text={ message.text } />));

             return <div className="layout">
             <div className="message-field">
                 { messageElements }
             </div>
             <div style={ { width: '100%', display: 'flex' } }>
                 <TextField
                     ref={ this.textInput }
                     name="input"
                     fullWidth={ true }
                     hintText="Please enter message"
                     style={ { fontSize: '22px' } }
                     onChange={ this.handleChange }
                     value={ this.state.input }
                     onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                 />
                 <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                     <SendIcon />
                 </FloatingActionButton>
             </div>
         </div>
  
            }
 }
 