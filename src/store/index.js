import {
    createStore, compose, applyMiddleware,
} from 'redux';
import rootReducer from "../reducers"

// const store = createStore(rootReducer);
// export default store;

export default function configureStore(initialState) {
    const middewares = [
    ];

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middewares),
        )
    );
}
