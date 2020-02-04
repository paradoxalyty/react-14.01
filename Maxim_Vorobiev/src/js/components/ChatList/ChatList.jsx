import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addChat} from '../../actions/chatActions';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Avatar1 from '../../../img/avatars/1.png';
import PropTypes from 'prop-types';
import './ChatList.css';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

// const classes = useStyles();

class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    state = {
        inputChat: '',
    };

    // addChat = (title) => {
    //     const {chats} = this.state;
    //     const chatId = Object.keys(chats).length + 1;

    //     this.setState({
    //         chats: {...chats,
    //         [chatId]: {title: title, messageList: []}},
    //     })

    //     console.log(chats);
    // };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleAddChat = () => {
        if (this.state.inputChat.length > 0) {
            this.props.addChat(this.state.inputChat);
            this.setState({inputChat: ''})
        }
    }

    handleChatKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleAddChat();
        }
    }
    
    render(){
        const chats = this.props.chats;
        const inputChat = this.state.inputChat;

        return <div className="react-messenger__chatlist">
            {/* <List dense className={classes.root}> */}
            <List dense>
                {Object.keys(chats).map(chatId => {
                    const labelId = `checkbox-list-secondary-label-${chatId}`;

                    return (
                        <Link className="react-messenger__chatlist-link" key={chatId} to={`/chat/${chatId}/`}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar ${chatId + 1}`}
                                        // src={`/dist/img/avatars/${chatId}.png`} // TODO
                                        src={Avatar1}
                                    />
                                </ListItemAvatar>

                                <ListItemText id={labelId} primary={Object.values(chats)[chatId - 1].title}/>
                            </ListItem>
                        </Link>
                    );
                })}

                <TextField
                    name="inputChat"
                    label="Add new chat"
                    // fullWidth
                    value={inputChat}
                    onChange={this.handleChange}
                    onKeyUp={(e) => this.handleChatKeyUp(e)}
                />

                <br/>
                
                <Button
                    onClick={() => this.handleAddChat()}
                    variant="contained"
                    color="primary"
                    // className={classes.button}
                    endIcon={<Icon>add</Icon>}
                >
                        Add
                    </Button>
            </List>
        </div>;
    }
}

// Map variable 'chats' from 'chatReducer'
// and function 'addChat' from 'actions/chatActions'
// with 'props' of 'ChatList' component
const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({addChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);