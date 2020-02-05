import React, {Component} from "react";
import PropTypes from "prop-types";

//export const Counter = () => <span>It's couter</span>

export class Counter extends Component {
  state = {
    // count: 0
  }
  static propTypes = {
    count: PropTypes.number,
    onCount: PropTypes.func
  }
  interval = null;

  componentDidMount() {
    console.log("компонент был примонтирован");
    // this.interval = setInterval(() => console.log("It's fired"), 2000); 
  }
  componentDidUpdate() {
    console.log("компонент был обновлен"); 
  }
  componentWillUnmount() {
    console.log("компонент был отмонтирован"); 
    // clearInterval(this.interval);
  }

  handleCount = (e) => {
    const num = +e.target.dataset.number;
    this.props.onCount(num);
  }

  render () {
    const { count } = this.props; 
    return (
      <div className="counter">
        <button className="counter__btn" data-number="-1" onClick={this.handleCount}>
          -1
        </button>
        <div className="counter__count">{count}</div>
        <button className="counter__btn" data-number="1" onClick={this.handleCount}>
          +1
        </button>
      </div>
    );
  }
}