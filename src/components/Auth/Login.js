import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import {authorizationRequest, registrationRequest} from "../../actions/authAction";
import {Redirect} from "react-router";
// import {authorizationRequest} from "../../actions/authAction";

class Login extends Component {
    constructor() {
        super();
    }

    render() {
        const { handleSubmit, isLogged } = this.props;

        if (isLogged) {
            return <Redirect to='/dashboard/profile' />
        }

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login-email-field">email:</label>
                    <Field name='email' id='login-email-field' type='email'  component="input"/>
                </div>
                <div>
                    <label htmlFor="login-pass-field">password:</label>
                    <Field name='password' id='login-pass-field' type='text' component="input"/>
                </div>
                <div>
                    <button type='submit'>login</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    const { isLogged } = state.authReducer;
    return {
        isLogged
    };
};

const mapDispatchToProps = (dispatch) => ({

});

// Connect flow
const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Login);

// Redux form flow
export default reduxForm({
    form: 'loginForm',
    onSubmit: (values, dispatch, props) => {
        dispatch(authorizationRequest(values));
    },
})(LoginConnect);