import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
// import {
//     syncHistoryWithStore,
// } from 'react-router-redux';

import {
 BrowserRouter as Router
} from 'react-router-dom';

import Routes from './routes';

export const store = configureStore();
// export const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes/>
        </Router>
        {/*<Router*/}
            {/*history={history}*/}
        {/*>*/}
            {/*<Routes/>*/}
        {/*</Router>*/}
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
