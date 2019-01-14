import React, { Component, Fragment } from "react";
import ElementUI from './UI/ElementUI';
import SearchProfile from './SearchProfile'

class GithubProfile extends Component {

    setStateWithUsername(username) {
        console.log(username);
        
    }
    // setNewUrlAPI = (username) => {
    //     return `${this.urlAPI}/${username}`
    // };

    // setStateAfterSearch(username) {
        // let url = this.setNewUrlAPI(username);
        // this.setState({ username: username, url: url });
    // }

    render() {
        return (
            <Fragment>
                <ElementUI Wrapper='header' className="u-flex-around-center" nameClass="header" typeClass='o' shadowSize={2}>
                    <div>Github profile</div>
                    <SearchProfile handleFunction={this.setStateWithUsername.bind(this)}/>
                </ElementUI>
            </Fragment>
        )
    }
}

export default GithubProfile;