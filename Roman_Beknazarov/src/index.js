import React from "react";
import ReactDom from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {MessageField} from "./components/MessageField";


ReactDom.render(
    <MuiThemeProvider>
        <MessageField/>
    </MuiThemeProvider>,
    document.getElementById('root'),
);
