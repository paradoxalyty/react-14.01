import React, { Component } from "react";
import MessageField from './MessageField';
import ChatList from './ChatList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';



export default class Layout extends React.Component {
  render () {
    return <>
    <Header />
      <div className='wrapper'>   
        <MuiThemeProvider>
          <ChatList/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <MessageField/>
      </MuiThemeProvider>
    </div>
    </>
  }
}