import React, {Component} from 'react';
import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import {Message} from './Message';
import '../styles/styles.css';

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

    componentDidUpdate() {
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

        return <div className="layout">
            <div className="message-field">
                {messageElements}
            </div>

            <div style={{width: '100%', display: 'flex'}}>
                <TextField
                    ref={this.textInput}
                    name="input"
                    fullWidth={true}
                    hintText="Your message"
                    style={{fontSize: '22px'}}
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