import React, { Component } from "react";
import '../styles/styles.css';
//export const Counter = () => <span>it is counter </span>;

export default class Header extends Component {
    state = {   
    }

    render () {
        return <div className='headerClass'>Wellcome to the Chat!</div>;
    }
}