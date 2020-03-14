import React, { Component } from "react";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import { push } from 'connected-react-router';
import {List, ListItem} from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/styles.css';
import ContentSend from 'material-ui/svg-icons/content/send';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { addChat, deleteChat } from '../actions/chatActions';


class ChatList extends React.Component {
  static propTypes = {
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    chatNewMessages: PropTypes.arrayOf(PropTypes.number).isRequired,
  };
  state = {
    input: '',
  };

  handleChange = (event) => {
     const value = event.target.value;
     const name = event.target.name;

     this.setState({
         [name]: value
     });
  };

  handleKeyUp = (event) => {
      if (event.keyCode === 13) { // Enter
          this.handleAddChat();
      }
  };

  handleAddChat = () => {
      if (this.state.input.length > 0) {
          this.props.addChat(this.state.input);
          this.setState({ input: '' });
      }
  };

  handleNavigate = (link) => {
    this.props.push(link);
    };

  /*  handleDeleteChat = (chatId) => {
        this.props.deleteChat(chatId);
    };*/

    render () {
      const { chats, chatNewMessages } = this.props;
      
      const chatElements = Object.keys(chats).map(chatId => (     
            <ListItem
                key={ chatId }
                primaryText={ chats[chatId].title }            
                leftIcon={ <CommunicationChatBubble /> }
                onClick={ () => this.handleNavigate(`/chat/${chatId}`) }    
                rightIcon={<DeleteIcon className={"deleteButton"}/>}
                style={ chatNewMessages.indexOf(Number(chatId)) >= 0 ? { backgroundColor: '#4ca1aa' } : {} }
                className={"deleteButtonDiv"}
            />

        ));

    return (
        <List>
            { chatElements }
            <ListItem
                key="Add new chat"
                leftIcon={ <AddIcon /> }
                onClick={ this.handleAddChat }
                style={ { height: '60px' } }
                children= {<TextField
                    key="textField"
                    fullWidth
                    name="input"
                    hintText="Add new chat"
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
                />}
            />

        </List>
    )
 }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    chatNewMessages: chatReducer.chatNewMessages,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ addChat, deleteChat, push }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);