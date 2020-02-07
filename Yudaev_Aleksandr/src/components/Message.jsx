import React from "react";
import PropTypes from 'prop-types';

export default class Message extends React.Component{
    static propTypes = {
        content: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div
                className="message"
                style={ { alignSelf: this.props.name === 'Robot' ?
                        'flex-start' : 'flex-end' } }

            >
                <strong>{ this.props.name }: </strong>
                { this.props.content }
            </div>
        )
    }
}