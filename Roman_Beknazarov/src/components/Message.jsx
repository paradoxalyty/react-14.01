import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        return <div>
            <b>{ this.props.text }: </b>
            { this.props.content }
        </div>
    }
}