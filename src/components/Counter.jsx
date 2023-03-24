import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementFive() {

        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    increment() {
        this.setState(prev => ({
            count: prev.count + 1
        }))
    }
    render() {
        return (
            <div>
                <p>count - {this.state.count}</p>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;