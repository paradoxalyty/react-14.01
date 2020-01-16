import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField.jsx';
import Button from './components/Button.jsx'

const messages = [{ name: "dog", text: "bark" }];

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            count: 0
        };
        
        this.onStateChange = this.onStateChange.bind(this);
    }
    onStateChange() {
        const message = { name: "cat", text: "meow" };
        this.setState({ messages: [...this.state.messages, message], count: this.state.count+1 });
    }
    componentDidUpdate(prevState) {
        if (this.state.messages[this.state.count - 1].name !== "robot") {
            const message = { name: "robot", text: "bzz" };
            setTimeout(() => {
                this.setState({ messages: [...this.state.messages, message], count: this.state.count+1 });
            }, 1000);
        }
    }
    render() {
        return <div className="app">
            <MessageField className="message-field" messages={this.state.messages} />
            <Button messages={messages} onStateChange={this.onStateChange} />
        </div>
    }
}

ReactDOM.render(<Chat />,
    document.getElementById('root'));