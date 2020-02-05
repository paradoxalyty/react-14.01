import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 0,
  };

  getTitleChat() {
    if (this.props.chatId !== 0) {
      return (
        <div>
          <Link to="/chats">Все чаты</Link> 
          <span>Текущий чат { this.props.chatId }</span>
        </div> 
      )   
    } else {
      return <Link to="/chats">Все чаты</Link> 
    }
  };

  render() {
    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> 
            <div className="title-chat">           
              <Typography variant="h6">
                {this.getTitleChat()}              
              </Typography>                       
              <Link to="/profile">
                <Typography variant="h6" className="title-profile">
                  Profile
                </Typography>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
    );
  }
}