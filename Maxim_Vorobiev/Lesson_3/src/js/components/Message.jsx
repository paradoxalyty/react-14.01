import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    };

    static defaultProps = {
        name: 'Name',
        content: "Message",
    };

    render() {
        return (
            <div className="react-messenger__message"
                 style={{
                     alignSelf: this.props.name === 'Support' ?
                         'flex-end' : 'flex-start'
                 }}
            >
                <div>{this.props.content}</div>
                <div className="react-messenger__message-sender">
                    {this.props.name}
                </div>
            </div>
        )
    }
}