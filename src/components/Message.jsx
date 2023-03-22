import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'Hello World!!!!!!'
        }
    }

    changeState() {
        this.setState({
            msg: 'Hello Aditya!!'
        })
    }

    render() {
        return (
            <div>
                <h4>
                    {this.state.msg}
                </h4>
                <button onClick={() => this.changeState()}>Click me!</button>
            </div>
        )
    }
}

export default Message;