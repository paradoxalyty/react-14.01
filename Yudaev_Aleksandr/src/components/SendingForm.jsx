import React from "react";

export default class SendingForm extends React.Component{
    render() {
        return (
            <button onClick={ this.handleClick }>Send message</button>
        )
    }
}