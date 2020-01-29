import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: 100,
        },
    },
}));

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

    // componentDidMount() {
    //     this.textInput.current.focus();
    // }

    // classes = useStyles();

    render() {
        return (
            // <form className={this.classes.root} noValidate autoComplete="off">
            <TextField
                name="input"
                label="Enter your message..."
                fullWidth
                autoFocus
                ref={this.textInput}
                value={this.props.input}
                onChange={this.props.handleChange}
                onKeyUp={(e) => this.props.handleKeyUp(e, this.props.input)}
            />
            // </form>
        )
    }
}