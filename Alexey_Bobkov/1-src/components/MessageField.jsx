import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = { 
        messages : [
        { name: 'Name1', content: 'Text1' },
        { name: 'Name2', content: 'Text2' },
        { name: 'Name3', content: 'Text3' },
        { name: 'Name4', content: 'Text4' }
    
    ]
        //messages: ["Привет!", "Как Дела?"]
    };

    handleClick =() => {
        this.setState({messages: [...this.state.messages, {name: 'Me', content: 'Есть кто жи?' } ]});
    };
    
    componentDidUpdate(){
      if (this.state.messages.length % 2===1){
        setTimeout(()=>
        this.setState(
            { messages: [...this.state.messages, {name: 'Robot', content: 'dont touch me' }]}),
        2000);
    }
}
    render() {
        
        const messageElements = this.state.messages.map((message,index) => (
            <Message {...message} key={index} />));
            console.log(messageElements);
            console.log(this.state);
            return <div>
                { messageElements }
                <button onClick={ this.handleClick }>Send Message</button>
            </div>
            
            
    }
    
}
