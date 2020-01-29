import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export const Input = ({handleKeyUp, handleChange, input}) => {
    // TODO - Note (for class component)
    // constructor(props) {
    //     super(props);
    // Create ref in input 'textInput' for DOM-element store
    // this.textInput = React.createRef();
    // }

    // componentDidMount() {
    //     this.textInput.current.focus();
    // }

    return (
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
    )
};

Input.propTypes = {
    handleKeyUp: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
};