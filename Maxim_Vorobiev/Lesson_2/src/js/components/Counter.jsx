import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Counter extends Component {
    static propTypes = {
        newMessages: PropTypes.number,
        totalMessages: PropTypes.number,
    };

    static defaultProps = {
        newMessages: 0,
        totalMessages: 0,
    };

    render() {
        return (
            <p className="stats">Total/New messages: {this.props.newMessages} / {this.props.totalMessages}</p>
        )
    }
}