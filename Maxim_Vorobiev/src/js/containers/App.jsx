import React, {Component} from 'react';
import {Layout} from '../components/Layout/Layout';
import PropTypes from 'prop-types';

const BOT_NAME = 'Bot';
const USER_NAME = 'Me';

const chats = {
    1: {title: 'Chat 1', messageList: [1]},
    2: {title: 'Chat 2', messageList: [2]},
    3: {title: 'Chat 3', messageList: [3]},
};

const messages = {
    1: {name: USER_NAME, content: 'Good afternoon!'},
    2: {name: USER_NAME, content: 'How are you?'},
    3: {name: USER_NAME, content: 'Can you help me please?'},
};

export class App extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    }

    static defaultProps = {
        chatId: 1,
    }

    state = {
        chats: chats,
        messages: messages,
        input: '',
    };

    sendMessage = (name, content) => {
        const {messages, chats, input} = this.state;
        const {chatId} = this.props;
        const messageId = Object.keys(messages).length + 1;

        if (input.length > 0 || name === BOT_NAME) {
            this.setState((state) => ({
                messages: {...messages, [messageId]: {name: name, content: content}},
                chats: {
                    ...chats, [chatId]: {
                        ...chats[chatId], messageList: [...chats[chatId]['messageList'], messageId]
                    }
                },

            }))
        }

        if (name === USER_NAME) {
            this.setState({input: ''})
        }
    };

    handleButton = (message) => {
        this.sendMessage(USER_NAME, message);
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.sendMessage(USER_NAME, this.state.input);
        }
    };

// Get input value (message) and change state 'input' when typing
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

// When the messages field is updated
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
        const {messages, chats, input} = this.state;
        const {chatId} = this.props;

        return <Layout chats={chats}
                       messages={messages}
                       input={input}
                       chatId={chatId}
                       handleButton={this.handleButton}
                       handleKeyUp={this.handleKeyUp}
                       handleChange={this.handleChange}
        />;
    }
}