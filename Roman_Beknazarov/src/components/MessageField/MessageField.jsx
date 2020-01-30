import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import { Message } from '../Message/Message';
import './MessageField.css';

export class MessageField extends Component {
    constructor(props) {
        super(props);
        // создадим ref в поле `textInput` для хранения DOM-элемента
        this.textInput = React.createRef();
    }

    state = {
        messages: [
            {text: "Hello!", sender: 'bot'},
            {text: "How are you?", sender: 'bot'}
        ],
        input: '',
    };

    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() =>
                this.setState({
                    'messages': [...this.state.messages, {
                        text: "Don't bother me I'm a robot",
                        sender: 'bot'
                    }]
                }), 1500);
        }
    }

    handleClick = (message) => {
        this.sendMessage(message)
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };

    sendMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, {text: message, sender: 'me'}],
            input: '',
        });
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender}/>
        ));

        return <div className="message-field">
            <div className="messages">
                {messageElements}
            </div>

            <div className="user-message" >
                <TextField
                    ref={this.textInput}
                    name="input"
                    fullWidth={true}
                    hinttext="Your message"
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
                />

                <FloatingActionButton onClick={() => this.handleClick(this.state.input)}>
                    <SendIcon/>
                </FloatingActionButton>

            </div>
        </div>
    }
}