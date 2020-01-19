import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        return <div>
            <i>{ this.props.text }: </i>
            { this.props.content }
        </div>
    }
}