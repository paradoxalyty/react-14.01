import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sendMessage} from '../actions/messageActions';
import {Layout} from '../components/Layout/Layout';
import PropTypes from 'prop-types';

const BOT_NAME = 'Bot';
const USER_NAME = 'Me';

const messages = {
    1: {name: USER_NAME, content: 'Good afternoon!'},
    2: {name: USER_NAME, content: 'How are you?'},
    3: {name: USER_NAME, content: 'Can you help me please?'},
};

class App extends Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
    }

    static defaultProps = {
        chatId: 1,
    }

    state = {
        messages: messages,
    };

    sendMessage = (name, content) => {
        const {messages} = this.state;
        const {chatId} = this.props;
        const messageId = Object.keys(messages).length + 1;

        this.setState((state) => ({
            messages: {...messages, [messageId]: {name: name, content: content}},

            // chats: {
            //     ...chats, [chatId]: {
            //         ...chats[chatId], messageList: [...chats[chatId]['messageList'], messageId]
            //     }
            // },

        }));

        this.props.sendMessage(messageId, name, content, chatId);
    };

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;
        const lastMessage = Object.values(messages)[Object.values(messages).length - 1];

        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            lastMessage.name !== BOT_NAME) {
            setTimeout(() =>
                    this.sendMessage(BOT_NAME, 'I will be back in a minute!'),
                300);
        }
    }

    render() {
        const {messages} = this.state;
        const {chatId} = this.props;

        if (messages) {
            return <Layout
                    chatId={chatId}
                    messages={messages}
                    sendMessage={this.sendMessage}
        />;
        } else {
            return <span>You haven't choosen a chat.</span>
        }
        
    }
}

// Map function 'sendMessage' from 'actions/messageActions'
// with 'props' of 'App' component
const mapStateToProps = ({}) => ({});
const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);