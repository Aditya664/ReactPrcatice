import React, { Component } from 'react'
class NewProj extends Component {

    constructor() {
        super();
        console.log('Log', this)
    }

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

                {this.renderTags()}
            </React.Fragment>
        );
    }


    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>
            {this.state.tags.map(tag => <li onClick={() => this.tagClicked(tag)} className={this.getBadgeClasses()} key={tag}>{tag}</li>)}
        </ul>
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

    tagClicked(tagName) {
        console.log(tagName)
    }
    increment() {
        this.setState(prev => ({
            count: prev.count + 1
        }))
        console.log(this.state.count)
    }

    decrement() {
        this.setState(prev => ({
            count: prev.count - 1
        }))
    }

}

export default NewProj;