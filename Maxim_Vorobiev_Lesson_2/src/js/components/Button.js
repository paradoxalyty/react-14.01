import React from 'react';

/*
// Function
export default function Button({buttonText}) {
    return <button id="button" className="button">{buttonText}</button>;
}
*/

// Class
export default class Button extends React.Component {
    render() {
        return (
            <button id="button" className="button" onClick={this.props.sendMessageClick}>
                {this.props.buttonText}
            </button>
        )
    }
}