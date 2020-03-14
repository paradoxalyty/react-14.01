import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export class Header extends Component {
    state = {
        headerText: 'ReactJS',
    };

    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            'headerText':
                this.state.headerText + ' Messenger'
        }), 1400);
    }

    render() {
        return (
            <>
                <h1 className="react-messenger__header">{this.state.headerText}</h1>
                <h3 className="react-messenger__subheader">ChatID: {this.props.chatId}</h3>
            </>
        );
    }
}