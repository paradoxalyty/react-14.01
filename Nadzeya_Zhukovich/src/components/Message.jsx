import React from "react";
import PropTypes from 'prop-types';

export class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, content} = this.props;
        return <div><b>{name}:</b> {content}</div>;
    }
}

Message.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
};
