import ReactDom from "react-dom";
import React from "react";
import MessageField from './components/messageFiled';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDom.render(<MuiThemeProvider><MessageField /></MuiThemeProvider>, document.getElementById('root')); //Рендерим в div




