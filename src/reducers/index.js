import { combineReducers } from "redux";
import authReducer from "./auth";
import profileReducer from './profile';

import {reducer as formReducer} from 'redux-form';
// import profileReducer from "./profile";
export default combineReducers({
    authReducer,
    profileReducer,
    form: formReducer
    // profileReducer
});