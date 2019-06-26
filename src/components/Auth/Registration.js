import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form';

import { authorizationRequest } from '../../actions/authAction';

class Registration extends Component {
    constructor() {
        super();
    }

    render() {
        const {isLogged, confirmRegistration, handleSubmit } = this.props;
        console.log('IS logged: ', isLogged)
        return (
            <form onSubmit={handleSubmit}>
                Is user already logged in: {''+isLogged}
                <div>
                    <label htmlFor="registration-email-field">email:</label>
                    <Field id='registration-email-field' name="email" type='email' component="input" />
                </div>
                <div>
                    <label htmlFor="registration-pass-field">password:</label>
                    <Field id='registration-pass-field' name="password" type='text' component="input" />
                </div>
                <div>
                    <label htmlFor="registration-confirm-pass-field">confirm password:</label>
                    <Field id='registration-confirm-pass-field' name="confirm_password" type='text' component="input" />
                </div>
                <div>
                    <button type='submit'>register</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State: ', state);
    const { isLogged } =  state.authReducer;

    return {
        isLogged
    };
};

const mapDispatchToProps = (dispatch) => ({
    confirmRegistration: () => { dispatch(authorizationRequest({})) }
});

// Connect flow
const RegistrationConnect = connect(mapStateToProps, mapDispatchToProps)(Registration);

// Redux form flow
export default reduxForm({
    form: 'registrationForm',
    onSubmit: (values, dispatch, props) => {
        console.log('Form submit: ', values, props)
    },
})(RegistrationConnect);