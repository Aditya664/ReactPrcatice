import React, { Component } from 'react'
class NewProj extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button onClick={() => this.increment()} className='btn btn-secondary btn-sm m-2'>Increment</button>
                <button onClick={() => this.decrement()} className='btn btn-danger btn-sm m-2'>Decrement</button>
                <ul>
                    {this.state.tags.map(tag => <li className={this.getBadgeClasses()} key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCounter() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    increment() {
        this.setState(prev => ({
            count: prev.count + 1
        }))
    }

    decrement() {
        this.setState(prev => ({
            count: prev.count - 1
        }))
    }

}

export default NewProj;