import React, {Component} from "react";

class ButtonSend extends Component {
    handleAdd = () => {
        const defaultMessage = {name: 'Tolik', content: "I'm ok!"};
        this.props.onSend (defaultMessage);
    }
    render () {
        return <button onClick={this.handleAdd}>Send</button>; 
    }
}

export {ButtonSend};