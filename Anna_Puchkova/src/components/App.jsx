import React, { Component } from "react";
import { Counter } from "./Counter";

export class App extends Component {
  state = {
      isShowCounter: true,
      count: 0,
  }

  handleTrigger = () => {
    this.setState(({isShowCounter}) => ({isShowCounter: !isShowCounter}));
  }

  handleCount = (num) => {
  //  const num = +event.target.dataset.number;
    this.setState(({count}) => ({count: count + num}))
}

  render () {
    const {count, isShowCounter} = this.state;
    return <>
      <button onClick={this.handleTrigger}>Trigger</button>
      <br/>
      {isShowCounter && <Counter count={count} onCount={this.handleCount}/>}
    
      
      </>
  }
}