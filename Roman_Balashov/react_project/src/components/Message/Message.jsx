import React, {Component} from 'react';
import './Message.css'

export class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={this.props.name === 'robot' ? "message-robot" : "message"}>
                {this.props.name}: {this.props.text}
        </div>;
    }
}