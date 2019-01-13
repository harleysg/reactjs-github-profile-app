import React, { Component, Fragment } from "react";
import ElementUI from './UI/ElementUI'

class GithubProfile extends Component {
    render() {
        return (
            <Fragment>
                <ElementUI Wrapper='header' typeClass='o' shadowSize={2}>
                    <div>Github profile</div>
                </ElementUI>
            </Fragment>
        )
    }
}

export default GithubProfile;