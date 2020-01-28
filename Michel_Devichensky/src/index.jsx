import React, { Component } from 'react';
import ReactDom from 'react-dom';


import Form from './components/Form/Form.jsx'

class App extends Component {  

    render() {
        return(
            <div>            
                <Form/>              
            </div>
        );
    } 
}
ReactDom.render(<App/>, document.querySelector('#root'));