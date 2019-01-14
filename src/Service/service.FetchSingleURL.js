const handleNewFetchWithNewProps = props => {
    return fetch(props)
        .then(r => r.json())
        .then(result => result );
};

export default handleNewFetchWithNewProps;