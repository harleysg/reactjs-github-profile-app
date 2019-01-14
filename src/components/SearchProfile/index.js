import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchProfile.scss'

class SearchProfile extends Component {
    /**
     * handleFunction
     * @props
     * @type function
     */
    handleSubmitForm = (e) => {
        e.preventDefault();
        // get the value os this component
        let thisInput = this.refs.username.value;
        let username = thisInput.toLowerCase();
        const regx = new RegExp('^([a-zA-Z0-9]{2,})$')
        /**
         * Conection with props function
         */
        if(regx.test(username))
            this.props.handleFunction(username);
        else
            console.log(`${username} isn´t validate name`)
        // Clear this component
        thisInput = "";
    }

    render() {
        return (
            <div className="c-search_field">
                <form 
                    onSubmit={this.handleSubmitForm.bind(this)} 
                    className="c-search_form" >
                    <label className="c-search_field">
                        <input
                            className="c-search_input"
                            type="search"
                            ref="username"
                            placeholder="Type Username + Enter"
                        />
                    </label>
                </form>
            </div>
        );
    }
}

SearchProfile.propTypes = {
    handleFunction: PropTypes.func.isRequired,
};

export default SearchProfile;