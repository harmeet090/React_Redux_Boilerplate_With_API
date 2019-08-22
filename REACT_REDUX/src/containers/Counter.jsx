import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from "../actions/counterActions";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addhandleClick = this.addhandleClick.bind(this);
        this.removehandleClick = this.removehandleClick.bind(this);
    }

    addhandleClick(e) {
        e.preventDefault();
        this.props.addCounter();
    }

    removehandleClick(e) {
        e.preventDefault();
        this.props.remCounter();
    }

    render() {
        return (
            <form>
                <h1>{this.props.count}</h1>
                <button className="btn btn-primary"
                    onClick={this.addhandleClick}>Inc</button>
                <button className="btn btn-primary"
                    onClick={this.removehandleClick}>Dec</button>
            </form>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        count: state.counterReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCounter: data => dispatch(counterActions.addCounter(data)),
        remCounter: data => dispatch(counterActions.removeCounter(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);