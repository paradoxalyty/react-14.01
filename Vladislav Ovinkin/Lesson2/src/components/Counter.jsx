import React, { Component } from "react";

// const Counter = () => <span>It's counter</span>;

export class Counter extends Component {
    // constructor (props) {
    //     super (props);
    //     this.state = {
    //         count: 0
    //     };
    //     this.handleCount = this.handleCount.bind (this); // #4 правильный способ - отработает только один раз при создании объекта
    // }
    state = { // #5 работает так, если установлено @babel/plugin-proposal-class-properties и прописано в конфиге webpack'а
        count: 0
    }
    interval = null;
    componentDidMount () {
        console.log ('componentDidMount');
        // this.interval = setInterval (() => console.log ("It's fired!"), 2000);
    }
    componentDidUpdate () {
        console.log ('componentDidUpdate');
    }
    componentWillUnmount () {
        console.log ('componentWillUnmount');
        clearInterval (this.interval);
    }
    // handleCount () { // эта запись теряет контекст при #5
    handleCount = (event) => { // #5
        const num = +event.target.dataset.number;
        // console.log ('click!');
        // this.setState ({ count: this.state.count + 1 }) // правильно, но есть опасность периодического не срабатывания из-за ассинхронности
        // this.setState ((state) => ({ count: this.state.count + 1 })) // сработает гарантированно
        // this.setState (({count}) => ({ count: count + num })); // сработает гарантированно + деструктуризация
        this.props.onCount(num); 
    }
    render () {
        const {count} = this.props;
        return <span>
            <button data-number="-1" onClick={this.handleCount}>-1</button>
            { count }
            {/* { this.state.count } */}
            {/* <button onClick={ this.handleCount }>+1</button> // #1 работать не будет - теряется контекст объекта, потому что в this записывается контекст события */}
            {/* <button onClick={ this.handleCount.bind (this) }>+1</button> // #2 так работать будет, но грозит при масштабировании потреблять много ресурсов */}
            {/* <button onClick={() => this.handleCount() }>+1</button> // #3 как в #2 накладные расходы, т.к. анонимная функция создаётся при каждом рендере */}
            <button data-number="1" onClick={this.handleCount}>+1</button> {/*-- #4 правильный вариант, такой же как #1, но тогда не было ничего прописано в конструкторе */}
        </span>;
    }
}