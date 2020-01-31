import React, { Component } from "react";
import { ChatList } from "../ChatList/ChatList";
import { ChatContainer } from "../../containers/ChatContainer";
import { Header } from "../Header/Header";
import Container from '@material-ui/core/Container';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Layout.css";

export class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container maxWidth="md">
          <Header />
          <div className="wrap">
            <ChatList />
            <Switch>
              <Route path="/chats" exact component={ChatContainer} />
              <Route path="/chats/:id" exact component={ChatContainer} />
              <Route path="/about">It's about</Route>
              <Route path="/home">It's home</Route>
              <Route path="/">It's 404</Route>
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}