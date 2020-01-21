import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
    static propTypes = {
        buttonText: PropTypes.string.isRequired,
        sendMessageClick: PropTypes.func,
    };

    static defaultProps = {
        buttonText: "Button Text",
    };

    render() {
        return (
            <button id="button" className="button" onClick={this.props.sendMessageClick}>
                {this.props.buttonText}
            </button>
        )
    }
}