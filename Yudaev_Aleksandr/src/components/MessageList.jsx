import React from "react";
import {TextField, IconButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import {blue500} from 'material-ui/styles/colors';
import Message from "./Message";
import '../styles/styles.css';

export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
        // создадим ref в поле `textInput` для хранения DOM-элемента
        this.textInput = React.createRef();
    }

    state = {
        messages: [
            {name: "Ivan", content: "Hello!"},
            {name: "Oleg", content: "Hi, how are you?"},
            {name: "Ivan", content: "I am well1"},
            {name: "Ivan", content: "I am well1"},
        ],
        input: '',
        textFieldDisabled: false
    };

    // Ставим фокус на <TextInput> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.messages[this.state.messages.length - 1].name !== "Robot" &&
            prevState.messages.length !== this.state.messages.length){
            setTimeout(() => {
                let message = {name: "Robot", content: "Stupid robot message"};
                this.setState(() => ({
                    messages: [...this.state.messages, message],
                    textFieldDisabled: false
                }));
                this.textInput.current.focus();
            }, 2000);
        }
    }

    handleClick = (message) => {
        this.sendMessage(message);
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13 && event.ctrlKey) { // ctrl + Enter
            this.sendMessage(message);
        }
    };

    sendMessage = (message) => {
        if (this.state.input !== '') {
            this.setState({
                messages: [...this.state.messages, {name: 'Ivan', content: message}],
                input: '',
                textFieldDisabled: true
            });
        }
    };

    render() {
        let messageList = this.state.messages.map((data, i) => <Message content={ data.content } name={ data.name } key = { i } />);
        return (
            <div className='message-field'>
                <div className='messages'>
                    { messageList }
                </div>
                <div style={ { width: '100%', display: 'flex' } }>
                    <TextField
                        ref={ this.textInput }
                        name="input"
                        disabled={this.state.textFieldDisabled}
                        multiLine={true}
                        rowsMax={5}
                        fullWidth={ true }
                        hintText={this.state.textFieldDisabled ? "Дождитесь ответа Robot" : "Введите сообщение"}
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                    />
                    <IconButton
                        onClick = { () => this.handleClick(this.state.input)}
                        tooltipPosition="center-center"
                        disabled={this.state.textFieldDisabled}
                    >
                        <SendIcon color = {blue500}/>
                    </IconButton>
                </div>
            </div>
        )
    }
}