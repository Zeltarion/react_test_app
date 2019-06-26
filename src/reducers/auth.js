import {
    ACTION_AUTH_REQUEST,
    ACTION_AUTH_SUCCESS,
    ACTION_AUTH_FAIL
} from "../actions/authAction";
const initState = {
    isLogged: false,
    isLoading: false,
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_AUTH_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ACTION_AUTH_SUCCESS: {
            return {
                ...state,
                isLogged:true,
                isLoading: false
            }
        }
        case ACTION_AUTH_FAIL: {
            return {
                ...state,
                isLogged:true,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
