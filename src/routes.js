/*eslint-disable no-console, import/no-named-as-default*/
import React, { Component } from 'react'
import {
    IndexRedirect,
    browserHistory,
    IndexRoute,
    Switch
} from 'react-router';

import {
    Route,
    Redirect
} from 'react-router-dom';

import App from './components/App/App';
import Home from './components/Home/Home';
import Auth from './components/Auth';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import NotFoundPageComponent from './components/NotFoundPageComponent/NotFoundPageComponent';

import {
    LOGIN_PAGE,
    START_PAGE,
    PASSWORD_RECOVERY_PAGE,
} from './constants/general';
import Profile from "./components/Profile/Profile";


function requireAuthMiddleware(nextState, replace) {
    /*const pathname = window.location.pathname;
    const isLogin = (pathname === LOGIN_PAGE);
    const isRecovery = (pathname === PASSWORD_RECOVERY_PAGE);*/

    // UserService.getToken().then(console.warn);
    // UserService.isAuthenticated()
    // .then((isAuth) => {
    //   if (!isAuth && (!isLogin && !isRecovery)) {
    //     browserHistory.push(LOGIN_PAGE);
    //   }
    //
    //   if (isAuth && (isLogin || isRecovery)) {
    //     browserHistory.push(START_PAGE);
    //   }
    // })
    // .catch(() => {
    //   replace({
    //     pathname: LOGIN_PAGE,
    //     query: {
    //       return_to: nextState.location.pathname,
    //     },
    //   });
    // });
}


// const getCurrentProfile = () => {
//     try {
//         let localStorage.getItem('profile');
//     } catch (e) {
//         return false;
//     }
// };

const checkAuthUser = () => {
    try {
        return localStorage.getItem('accessToken');
    } catch (e) {
        return false;
    }
};
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        checkAuthUser()
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />);

class Routes extends Component {
    render() {
        return (
            <App>
                <Route
                    exact
                    path={START_PAGE}
                    component={Home}
                >
                </Route>
                <Route
                    exact
                    path='/login'
                    component={Login}
                >
                </Route>
                <Route
                    exact
                    path='/registration'
                    component={Registration}
                >
                </Route>
                <PrivateRoute
                    exact
                    path='/dashboard'
                    component={Dashboard}
                >
                    <Route
                        path='/dashboard/profile'
                        component={Profile}
                    >
                    </Route>
                    <Route
                        path='/dashboard/news'
                        component={Profile}
                    >
                    </Route>
                </PrivateRoute>

                <Route
                path='*'
                component={NotFoundPageComponent}
                />
            </App>
        )
    }
}

export default Routes

