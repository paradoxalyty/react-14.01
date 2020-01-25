import '../../style.css';

import React, { Component } from 'react';

import Message from '../Message/Message.jsx';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
        this.Ref = React.createRef()
    }
    sendMessage = () => {
        const message = this.Ref.current.value;
        const newMessage = [];
        newMessage.push(message)
        this.setState({ message: newMessage});
        this.Ref.current.value = '';
    }

    render() {
        const x = this.state.message.map((item, index) => {
          return <Message message={this.state.message}/>
        })
        return(
            <div >
                <Message message={this.state.message}/>
                <input
                    ref={this.Ref} 
                    type="text" 
                    placeholder="message" 
                >  
                </input>
                <button onClick={this.sendMessage}>отправить</button>   
            </div>
        )
    }   
}