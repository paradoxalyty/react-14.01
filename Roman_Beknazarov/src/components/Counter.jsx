import React, { Component } from 'react';

//export const Counter = () => <span>It is a counter</span>

export class Counter extends Component {
    state = {
        count: 0
    };

    componentDidMount() {
        console.log('Child componentDidMount');
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Child componentWillUnmount');
    }

    handleCount = (event) => {
        const num = +event.target.dataset.number;
      console.log("Click");
      this.setState(({count}) => ({count: count + num}))
    };

    render() {
        return <span>
            <button data-number="-1" onClick={this.handleCount}>-1</button>
            {this.state.count}
            <button data-number="1" onClick={this.handleCount}>+1</button>
        </span>;
    }
}