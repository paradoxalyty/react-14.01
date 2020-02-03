import React from "react";
import ReactDom from "react-dom";
import MessageField from "./components/MessageField/MessageField.jsx"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Layout} from "./components/Layout/Layout.jsx"

ReactDom.render(<>
    <MuiThemeProvider>
    <Layout />
    </MuiThemeProvider>
    <MuiThemeProvider>
    <MessageField />
    </MuiThemeProvider>
    </>,
    document.getElementById('root'),
    
 );