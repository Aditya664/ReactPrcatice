import { Component } from "react";

class ClassClick extends Component {
    // constructor() { }
    classClickHandler() {
        console.log('Click to the button')
    }

    render() {
        return (
            <div>
                <button onClick={this.classClickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick;