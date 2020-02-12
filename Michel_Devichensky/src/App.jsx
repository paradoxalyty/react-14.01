import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';//Provider ко-т React для обертки приложения в Store

// import { ChatList } from './components/ChatList/ChatList'
import ChatContainer from './containers/ChatContainer';
import { initStore } from './store/store';//импорт Store и функции из нее дабы передать пропсом 

const store = initStore();
export class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        {/* <ChatList/> */}
        <Switch>
          <Route path="/chats/" exact component={ChatContainer} />
          <Route path="/chats/:id" exact component={ChatContainer} />
          <Route path="/about">
            it's about
          </Route>
          <Route path="/home">
            it's home
          </Route>
          <Route path="/">
            it's index
          </Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    )
  }
}