import React, {Component} from 'react';
import {FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';

export class Button extends Component {
    static propTypes = {
        handleButton: PropTypes.func,
    };

    render() {
        return (
            <FloatingActionButton onClick={() => this.props.handleButton(this.props.input)}>
                <SendIcon/>
            </FloatingActionButton>
        )
    }
}