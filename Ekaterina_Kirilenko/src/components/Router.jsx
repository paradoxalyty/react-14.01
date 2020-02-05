import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Profile } from './Profile/Profile';

export class Router extends Component {
  render() {
    return (    
      <Switch>
        <Route exact={true} path='/chats' component={ Layout } />
        <Route exact path='/profile' component={ Profile } />
        <Route exact path='/'>It's 404</Route>
        <Route exact path='/chats/:chatId/' 
          render={ obj => <Layout chatId={Number(obj.match.params.chatId)} />} 
        />
      </Switch>
    )
  }
}