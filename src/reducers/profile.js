import jwtDecode from "jwt-decode";

import {
    ACTION_SET_PROFILE,
} from "../actions/profileAction";

const initState = {
    profile: null
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_SET_PROFILE: {

            // const {accessToken} = action.payload;
            // const profile = jwtDecode(accessToken);
            // console.log(profile);

            let profile = action.payload;

            return {
                ...state,
                profile,
            }
        }
        default:
            return state;
    }
};

export default profileReducer;