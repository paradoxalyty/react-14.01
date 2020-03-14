import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Message} from '../Message/Message';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import './MessageField.css';

const BOT_NAME = 'Bot';
const USER_NAME = 'Me';

class MessageField extends Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        chats: PropTypes.object.isRequired,
        messages: PropTypes.objectOf(PropTypes.shape(Message.propTypes)),
        sendMessage: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleButton = (message) => {
        const {input} = this.state;

        if (input.length > 0) {
            this.props.sendMessage(USER_NAME, message);

            this.setState({input: ''})
        }
    };

    handleKeyUp = (e) => {
        const {input} = this.state;

        if (e.keyCode === 13 && input.length > 0) {
            this.props.sendMessage(USER_NAME, this.state.input);

            this.setState({input: ''})
        }
    };

    render() {
        const {chats, chatId, messages} = this.props;
        const {input} = this.state;

        return <>
        <div className="react-messenger__messages">
            {chats[chatId].messageList.map(
                (messageId, index) => (
                    <Message
                        key={index}
                        name={messages[messageId].name}
                        content={messages[messageId].content}
                    />
                )
            )}
        </div>
        
        <TextField
            name="input"
            label="Enter your message..."
            fullWidth
            autoFocus
            // ref={this.textInput}
            value={input}
            onChange={this.handleChange}
            onKeyUp={(e) => this.handleKeyUp(e, input)}
        />

        <Button
            onClick={() => this.handleButton(input)}
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
        >
            Send
        </Button>
        </>;
    }
}

// Map variable 'chats' from 'chatReducer'
// with 'props' of 'ChatList' component
const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);