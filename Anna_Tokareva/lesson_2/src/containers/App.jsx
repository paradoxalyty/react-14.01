import React, { Component } from "react";
import { ChatContainer } from "./ChatContainer";
import { Header } from "../components/Header/Header";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ChatContainer />
      </div>
    );
  }
}
