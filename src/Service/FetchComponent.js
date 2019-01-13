import React, { Component } from 'react';

/**
 * 
 */

const FetchComponent = Wrapper => class Feth extends Component {
    constructor() {
        super();
        this.state = { result: null }
    }

    handleNewFetchWithNewProps = props => {
        fetch(props)
            .then(r => r.json())
            .then(result => this.setState({ result }));
    };

    componentDidMount() {
        this.handleNewFetchWithNewProps(this.props.url);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.url !== prevProps.url) {
            this.handleNewFetchWithNewProps(this.props.url);
        }
    }

    render() {
        const { result } = this.state;
        return result ? <Wrapper data={result}/> : null
    }
};

export default FetchComponent;