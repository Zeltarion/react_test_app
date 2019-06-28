import {
    createStore, compose, applyMiddleware,
} from 'redux';
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk';


// const store = createStore(rootReducer);
// export default store;

export default function configureStore(initialState) {
    const middewares = [
        thunkMiddleware,
    ];

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),
    );
}
