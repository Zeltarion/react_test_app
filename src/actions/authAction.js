import axios from "axios";
import { BASE_URL } from '../constants/general';
import {actionSetProfile} from './profileAction';

export const ACTION_AUTH_REQUEST = "ACTION_AUTH_REQUEST";
export const ACTION_AUTH_SUCCESS = "ACTION_AUTH_SUCCESS";
export const ACTION_AUTH_FAIL = "ACTION_AUTH_FAIL";
export const ACTION_REGISTRATION_REQUEST = "ACTION_REGISTRATION_REQUEST";
export const ACTION_REGISTRATION_SUCCESS = "ACTION_REGISTRATION_SUCCESS";
export const ACTION_REGISTRATION_FAIL = "ACTION_REGISTRATION_FAIL";

export const authorizationRequest = (payload) => {
    return (dispatch) => {
        const { email, password } = payload;
        dispatch(actionAuthorizationRequest());

        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => {
                dispatch(actionAuthorizationSuccess(json));
                dispatch(actionSetProfile(json));
            }).catch((error) => {
                dispatch(actionAuthorizationFail(error));
            })
        // axios.post(`${BASE_URL}/authentication`, {
        //     email,
        //     password,
        //     strategy: 'local'
        // }).then(function (response) {
        //     dispatch(actionAuthorizationSuccess(response.data));
        //     dispatch(actionSetProfile(response.data));
        // }).catch(function (error) {
        //     console.log('ghvhvhv', error)
        //     dispatch(actionAuthorizationFail(error));
        // });
    }
};

export const actionAuthorizationRequest = () => {
    return {
        type: ACTION_AUTH_REQUEST,
    }
};

export const actionAuthorizationSuccess = (payload) => {
    return {
        type: ACTION_AUTH_SUCCESS,
        payload
    }
};

export const actionAuthorizationFail = (payload) => {
    return {
        type: ACTION_AUTH_FAIL,
        payload
    }
};

export const registrationSuccess = (payload) => {
    return {
        type: ACTION_REGISTRATION_SUCCESS,
        payload
    }
};

export const registrationFail = (payload) => {
    return {
        type: ACTION_REGISTRATION_FAIL,
        payload
    }
};

export const actionRegistrationRequest = () => {
    return {
        type: ACTION_REGISTRATION_REQUEST
    };
};

export const registrationRequest = (payload) => {
    return (dispatch) => {
        const { email, password } = payload;

        dispatch(actionRegistrationRequest());

        return axios.post(`${BASE_URL}/users`, {
            email,
            password,
        }).then(function (response) {
            dispatch(registrationSuccess(response));
        })
        .catch(function (error) {
            dispatch(registrationFail(error));
        });
    }
};


