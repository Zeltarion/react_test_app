import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form';
// import {authorizationRequest} from "../../actions/authAction";

class Login extends Component {
    constructor() {
        super();
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login-email-field">email:</label>
                    <Field id='login-email-field' type='email'  component="input"/>
                </div>
                <div>
                    <label for="login-pass-field">password:</label>
                    <Field id='login-pass-field' type='text' component="input"/>
                </div>
                <div>
                    <button type='submit'>login</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
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
        console.log('Form submit: ', values, props)
    },
})(LoginConnect);