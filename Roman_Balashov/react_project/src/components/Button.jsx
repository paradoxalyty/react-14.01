import React from 'react';

export class Button extends React.Component {
    render() {
        return <button className="send-button" onClick={this.props.onStateChange}>Send</button>;
    }
}