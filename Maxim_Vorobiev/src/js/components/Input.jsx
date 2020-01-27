import React, {Component} from 'react';
import {TextField} from 'material-ui';
import PropTypes from 'prop-types';

export class Input extends Component {
    constructor(props) {
        super(props);
        // Create ref in input 'textInput' for DOM-element store
        this.textInput = React.createRef();
    }

    static propTypes = {
        handleKeyUp: PropTypes.func,
        handleChange: PropTypes.func,
    };

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <TextField
                name="input"
                fullWidth={true}
                hintText="Enter message..."
                ref={this.textInput}
                value={this.props.input}
                onChange={this.props.handleChange}
                onKeyUp={(e) => this.props.handleKeyUp(e, this.props.input)}
            />
        )
    }
}