import React, {Component} from 'react';
import {FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';

export class Button extends Component {
    static propTypes = {
        buttonText: PropTypes.string.isRequired,
        handleButton: PropTypes.func,
    };

    static defaultProps = {
        buttonText: "Button Text",
    };

    render() {
        return (
            <FloatingActionButton onClick={() => this.props.handleButton(this.props.input)}>
                <SendIcon/>
            </FloatingActionButton>

            // {this.props.buttonText}
        )
    }
}