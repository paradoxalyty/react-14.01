import React from "react";
import {Message} from "./Message";
import PropTypes from 'prop-types';

export class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.messages.map((message, index) =>
            <Message {...message} key={index}/>)
    }
}

MessageList.propTypes = {
    messages: PropTypes.array,
};
