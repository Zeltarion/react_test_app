import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {getCurrentProfile} from '../../actions/profileAction';

class Dashboard extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        const { getCurrentUserProfile } = this.props;
        console.log('!!!!!!!!!!');
        getCurrentUserProfile();
    }

    render() {
        return (
            <div>
                Dashboard
                <div><Link to="/profile">Profile</Link></div>
                <div><Link to="/news">News</Link></div>
            </div>
    )}
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => ({
    getCurrentUserProfile: () => {
        dispatch(getCurrentProfile);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);