import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const ButtonSend = ({handleButton, input}) => {
    const classes = useStyles();

    return (
        <Button
            onClick={() => handleButton(input)}
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
        >
            Send
        </Button>
    );
};

ButtonSend.propTypes = {
    handleButton: PropTypes.func,
    input: PropTypes.string.isRequired,
};