import {
    ACTION_AUTH_REQUEST,
    ACTION_AUTH_SUCCESS,
    ACTION_AUTH_FAIL
} from "../actions/authAction";
import jwtDecode from 'jwt-decode';

const initState = {
    isLogged: false,
    isLoading: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_AUTH_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ACTION_AUTH_SUCCESS: {
            // const { accessToken } = action.payload;
            // localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('accessToken', JSON.stringify(action.payload));
            return {
                ...state,
                isLogged: true,
                isLoading: false
            }
        }
        case ACTION_AUTH_FAIL: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};

export default authReducer;
