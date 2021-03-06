import React, {Component} from 'react';
import { connect } from 'react-redux'
// import {Field, reduxForm} from 'redux-form';
// import {authorizationRequest} from "../../actions/authAction";
// import {authorizationRequest} from "../../actions/authAction";

class Profile extends Component {
    constructor() {
        super();
    }

    render() {
        const { profile } = this.props;
        const { avatarUrl } = profile;
        return (
            <div>
                <div>Profile</div>
                <img width="240px" height="240px" src={avatarUrl}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const profile = state.profileReducer;
    return {
        profile
    };
};

const mapDispatchToProps = (dispatch) => ({

});

// Connect flow
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
