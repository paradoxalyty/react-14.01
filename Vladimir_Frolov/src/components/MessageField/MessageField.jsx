import React from "react";
import {Message} from "../Message/Message";
import './MessageField.css'

export class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.messages,
            name: '',
            message: '',
            error: false
        };
        this.handleOnClickAddMessage = this.handleOnClickAddMessage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handOnChange = this.handOnChange.bind(this);
        this.ref_name = React.createRef();
        this.timeout;
    }


    componentDidUpdate() {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout=setTimeout(()=>{
            if (this.state.messages.length > 3 && this.state.messages[this.state.messages.length - 1]['name'] !== 'ROBOT') {
                this.addNewMessage("ROBOT", this.state.messages[this.state.messages.length - 1]['name'] + ", я робот")
            }
        }, 2000);

    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout);
    }


    addNewMessage(name, text) {
        if (name !== '' && text !== '')
            this.setState(({messages}) => {
                let new_messages = messages.slice();
                new_messages.push({name: name, content: text});
                return {messages: new_messages, name: '', message: ''}
            });
        else this.setState({error: true})
    }

    handleKeyUp(event) {
        if (event.key === 'Enter') {
            this.addNewMessage(this.state.name, this.state.message);
        } else {
            this.setState({error: false})
        }
    }

    handOnChange(event) {
        let name = event.target.dataset.name;
        let new_state = {};

        new_state[name] = event.target.value;
        this.setState(new_state);
    }

    handleOnClickAddMessage() {
        this.addNewMessage(this.state.name, this.state.message);
    }

    render() {
        let messages = this.state.messages.map((message, index) => <Message {...message} key={index}/>);
        return <>
            <div className="MessageField">{messages}</div>
            <br/>
            {this.state.error ? <div className="error">Заполните оба поля</div> : ''}
            <input data-name="name" placeholder="ИМЯ" ref={this.ref_name} value={this.state.name}
                   onChange={this.handOnChange}/>
            <input data-name="message" value={this.state.message} onKeyUp={this.handleKeyUp}
                   onChange={this.handOnChange} placeholder="СООБЩЕНИЕ"/>
            <button onClick={this.handleOnClickAddMessage}>Добавить сообщение</button>
        </>
    }
}