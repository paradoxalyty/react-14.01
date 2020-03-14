import React, {Component} from "react";
import {ChatList} from "../components/ChatList/ChatList.jsx"

export default class ChatsListContainer extends Component {
  
  state = {
    chats: {
      1: {title: 'О жизни', messageList: 1},
      2: {title: 'Философия', messageList: 2},
      3: {title: 'Как наказать начальника', messageList: 3},
    },
  };

  render() {
    return (
      <ChatList chats={this.state.chats}></ChatList>
    )
  }
}