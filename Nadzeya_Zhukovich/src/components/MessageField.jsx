import React from "react";
import PropTypes from 'prop-types';

export class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
    }

    onInputChangeHandler(event) {
        this.setState({message: event.target.value});
    }

    onSendButtonClick() {
        this.props.sendMessageHandler(this.props.currentUser, this.state.message);
        this.setState({message: ''});
    }

    render() {
        return <div>
            <input type={"text"} name={"message"} value={this.state.message} onChange={this.onInputChangeHandler.bind(this)}/>
            <button onClick={() => this.onSendButtonClick()}>sent</button>
        </div>;
    }
}

MessageField.propTypes = {
    currentUser: PropTypes.string,
    sendMessageHandler: PropTypes.func,
};
