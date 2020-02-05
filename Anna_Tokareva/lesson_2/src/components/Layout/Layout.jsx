import React, { Component } from "react";
import { Profile } from "../Profile/Profile";
import ChatContainer from "../../containers/ChatContainer";
import ChatListContainer from "../../containers/ChatListContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";
import "./Layout.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initStore } from "../../store/store";
import { Provider } from "react-redux";
import { loadChats } from "../../store/chatAction";
import { loadUser } from "../../store/userAction";

const store = initStore();
store.dispatch(loadChats());
store.dispatch(loadUser());

export class Layout extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/profile" exact component={HeaderContainer} />
            <Route path="/chats" exact component={HeaderContainer} />
            <Route path="/chats/:id" exact component={HeaderContainer} />
          </Switch>
          <div className="Chat">
            <ChatListContainer className="ChatList-Position" />
            <div className="ChatField-Position">
              <Switch>
                <Route path="/profile" exact component={ProfileContainer} />
                <Route path="/chats" exact component={ChatContainer} />
                <Route path="/chats/:id" exact component={ChatContainer} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
