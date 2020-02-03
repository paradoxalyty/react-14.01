import React, {Component} from "react";
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
    this.setState((state) => ({count: state.count + num}));
  }


  render() {
    const {count, isShowCounter} = this.state; //деструктизация стэйта
    return (
      <>
        <button className="trigger" onClick={this.handleTrigger}>
          Показать/скрыть счетчик
        </button>
        {isShowCounter && <Counter count={count} onCount={this.handleCount} />}
      </>
    );
  }
}