export const ACTION_AUTH_REQUEST = "ACTION_AUTH_REQUEST";
export const ACTION_AUTH_SUCCESS = "ACTION_AUTH_SUCCESS";
export const ACTION_AUTH_FAIL = "ACTION_AUTH_FAIL";

export const authorizationRequest = (payload) => {
    return {
        type: ACTION_AUTH_REQUEST,
        payload
    }
};

export const authorizationSuccess = (payload) => {
    return {
        type: ACTION_AUTH_SUCCESS,
        payload
    }
};

export const authorizationFail = (payload) => {
    return {
        type: ACTION_AUTH_FAIL,
        payload
    }
};