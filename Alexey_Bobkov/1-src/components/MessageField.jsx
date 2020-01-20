import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state ={
        messages: ["Привет!", "Как Дела?"]
    };

    handleClick =() => {
        this.setState({messages: [ ...this.state.messages, 'Normalno' ]});
    };
    
    componentDidUpdate(){
      if (this.state.messages.length % 2===1){
        setTimeout(()=>
        this.setState(
            { messages: [...this.state.messages, 'Dont touch me, im robot']}),
        2000);
    }
}

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text= { text } />));

            return <div>
                { messageElements }
                <button onClick={ this.handleClick }>Send Message</button>
            </div>
        
    }
}