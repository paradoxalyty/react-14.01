import React from 'react';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

export const ChatForm = ({handleKeyUp, handleChange, handleButton, input}) => (
    <>
        <TextField
            name="input"
            label="Enter your message..."
            fullWidth
            autoFocus
            // ref={this.textInput}
            value={input}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e, input)}
        />

        <Button
            onClick={() => handleButton(input)}
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
        >
            Send
        </Button>
    </>
);

ChatForm.propTypes = {
    handleButton: PropTypes.func.isRequired,
    handleKeyUp: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
};

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreatord({}, dispatch);

export default connect(mapStateToProps, mapStateToProps) (ChatForm);