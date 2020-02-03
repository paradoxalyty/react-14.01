import React, { Component } from "react";
import PropTypes from "prop-types";
import { ChatList } from "../ChatList/ChatList"; 
import { ChatContainer } from "../../containers/ChatContainer"; 
import { Header } from "../Header/Header"; 
import Container from '@material-ui/core/Container'; 
import "./Layout.css";

export class Layout extends Component {
  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 0,
  };

  render() {
    return (
        <Container maxWidth="md">
          <Header chatId={this.props.chatId} />
          <div className="wrap">
            <ChatList />
            <ChatContainer chatId={this.props.chatId} />
          </div>
        </Container>
      );
  }
}