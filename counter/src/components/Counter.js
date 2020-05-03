import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {

    render() {
        return (
            <div>
                <button 
                    className="increment"
                    onClick={() => this.props.increment()}
                >
                    Increment
                </button>
                <button 
                    className="decrement"
                    onClick={() => this.props.decrement()}
                >
                    Decrement
                </button>
                Current Count: <span>{this.props.count}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { count: state.count };
}

export default connect(mapStateToProps, { increment, decrement })(Counter);