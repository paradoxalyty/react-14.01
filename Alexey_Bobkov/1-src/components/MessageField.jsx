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
    };

    handleClick =() => {
        this.setState({messages: [...this.state.messages, {name: 'Me', content: 'Есть кто жи?' } ]});
    };
    
    componentDidUpdate(){
        console.log(this.state.messages[this.state.messages.length-1].name);
      if (this.state.messages[this.state.messages.length-1].name != 'Robot' ){
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
