import React from 'react';
import {FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';

export const Button = ({handleButton, input}) => (
    <FloatingActionButton onClick={() => handleButton(input)}>
        <SendIcon/>
    </FloatingActionButton>
);

Button.propTypes = {
    handleButton: PropTypes.func,
};