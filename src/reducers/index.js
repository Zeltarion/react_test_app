import { combineReducers } from "redux";
import { authReducer } from "./auth";
import {reducer as formReducer} from 'redux-form';
// import profileReducer from "./profile";
export default combineReducers({
    authReducer,
    form: formReducer
    // profileReducer
});