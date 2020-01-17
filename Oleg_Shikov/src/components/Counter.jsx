import React, {Component} from "react";
import PropTypes from "prop-types"

//export const Counter = () => <span>It's counter</span>
export class Counter extends Component {
    state = {
        // count: 0
    }
    static propTypes = {
        count: PropTypes.number,
        onCount: PropTypes.func
    }
    interval =  null;
    // componentWillMount () {}
    // componentWillUpdate() {}
    componentDidMount() {
        console.log("componentDidMount")
        this.interval = setInterval(() => console.log("It's fired"), 2000)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(this.interval);
    }
    handleCount = (event) => {
        const num = +event.target.dataset.number;
        this.props.onCount(num);
    }
    render () {
        const {count} = this.props;
        return <span>
            <button data-number="-1" onClick={this.handleCount}>-1</button>
            {count}
            <button data-number="1" onClick={this.handleCount}>+1</button>
        </span>
    }
}