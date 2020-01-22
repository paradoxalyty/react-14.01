import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    };

    static defaultProps = {
        name: 'Name',
        content: "Message",
    };

    render() {
        return <div><strong>{this.props.name}:</strong> {this.props.content}</div>;
    }
}