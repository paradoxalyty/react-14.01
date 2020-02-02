import React, { Component } from "react";
import './Header.scss';

export class Header extends Component {
  render() {
    return <header className='header'>
                    <a href="/profile">profile</a>
                </header>;
  }
}