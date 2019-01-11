import React, { Component, Fragment } from "react"
import FetchComponent from '../Service/FetchComponent'

class GithubProfile extends Component {
    render() {
        return (
            <Fragment>
                <FetchComponent></FetchComponent>
                <div>Github profile</div>
            </Fragment>
        )
    }
}

export default GithubProfile;