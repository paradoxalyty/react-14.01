import React, {Component} from "react";
import HeaderContainer from "./containers/HeaderContainer.jsx"
import ChatContainer from "./containers/ChatContainer.jsx"
import ChatsListContainer from "./containers/ChatsListContainer.jsx"
import "./App.css"

export default class App extends React.Component {
  render() {
      return (
        <div className='App'>
          <HeaderContainer></HeaderContainer>
          <div className='App-ChatsField'>
            <ChatsListContainer></ChatsListContainer>
            <ChatContainer></ChatContainer>
          </div>
        </div>
      )
  }
}