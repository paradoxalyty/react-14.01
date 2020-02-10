import React, {Component} from 'react';

export class Clock extends Component {
    state = {date: new Date()};

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState()
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <span>{this.state.date.toLocaleTimeString()}</span>
        );
    }
}