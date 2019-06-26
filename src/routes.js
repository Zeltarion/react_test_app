/*eslint-disable no-console, import/no-named-as-default*/
import React, { Component } from 'react'
import {
    IndexRedirect,
    browserHistory,
    IndexRoute,
    Switch
} from 'react-router';

import {
    Route
} from 'react-router-dom';

import App from './components/App/App';
import Home from './components/Home/Home';
import Auth from './components/Auth';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';

import {
    LOGIN_PAGE,
    START_PAGE,
    PASSWORD_RECOVERY_PAGE,
} from './constants/General';


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

class Routes extends Component {
    render() {
        return (
            <Switch>
                <App>
                    <Route
                        exact
                        path={START_PAGE}
                        component={Home}
                    >
                    </Route>
                    <Route
                        exact
                        path='/auth'
                        component={Auth}
                    >
                        <Route
                            exact
                            path='/auth/login'
                            component={Login}
                        >
                        </Route>

                        <Route
                            exact
                            path='/auth/registration'
                            component={Registration}
                        >
                        </Route>
                    </Route>

                    {/*<Route*/}
                    {/*path='*'*/}
                    {/*component={NotFoundPageComponent}*/}
                    {/*/>*/}
                </App>
            </Switch>
        )
    }
}

export default Routes

