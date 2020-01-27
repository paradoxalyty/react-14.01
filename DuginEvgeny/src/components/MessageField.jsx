import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {name:"Name-test-1", content:"Message-test-1"},
            {name:"Name-test-2", content:"Message-test-2"},
            {name:"Name-test-3", content:"Message-test-3"}
        ]
    };


    handleClick = () => {
        this.setState(({messages}) => ({messages: [...messages, {name: 'StudentGeekBrains', content: 'Hello Alisa!'}] }));
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1].name !== "Alisa") {
            setTimeout(() => {
                this.setState(({messages}) => ({messages: [...messages, {name: 'Alisa', content: 'Hello, StudentGeekBrains'}] }))
            },1000);
        }
    }

render() {
    const MessageElements = this.state.messages.map((text,index) => 
    (<Message key={index} text {...text}/>));

    return <>
        {MessageElements} 
        <button onClick={this.handleClick}>Send mail</button>
    </>
    }
}