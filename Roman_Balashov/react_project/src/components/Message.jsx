import React, {Component} from 'react';
import SnackbarContent from "@material-ui/core/SnackbarContent";

export class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="message">{this.props.name}: {this.props.text}</div>;
    }
}