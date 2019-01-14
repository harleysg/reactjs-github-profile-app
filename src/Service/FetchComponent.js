import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * 
 */

const FetchComponent = Wrapper => class Feth extends Component {
    constructor() {
        super();
        this.state = { result: null }
    }

    setNewStateAcrossFetch = props => {
        fetch(props)
            .then(r => r.json())
            .then(result => this.setState({ result }));
    };

    componentDidMount() {
        this.setNewStateAcrossFetch(this.props.url);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.url !== prevProps.url) {
            this.setNewStateAcrossFetch(this.props.url);
        }
    }

    render() {
        const { result } = this.state;
        return result ? <Wrapper data={result}/> : null
    }
};

FetchComponent.propTypes = {
    Wrapper: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired,
}

export default FetchComponent;