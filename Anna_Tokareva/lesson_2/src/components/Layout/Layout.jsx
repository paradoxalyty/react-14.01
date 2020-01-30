import React, { Component } from "react";
import { ChatContainer } from "../../containers/ChatContainer";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";
import "./Layout.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="Chat">
          <ChatList className="ChatList-Position" />
          <div className="ChatField-Position">
            <Switch>
              <Route path="/chats" exact component={ChatContainer} />
              <Route path="/chats/:id" exact component={ChatContainer} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
