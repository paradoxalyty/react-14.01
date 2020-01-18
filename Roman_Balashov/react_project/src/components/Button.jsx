import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button className="send-button" onClick={this.props.onStateChange}>Send</button>;
    }
}

export default Button;