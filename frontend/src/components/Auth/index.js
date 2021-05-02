import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Login from './Login'
import Signup from './SignUp/Signup'
const Auth = () => {
    const match = useRouteMatch()
    return (
        <>
            <Switch>
                <Route path={`${match.path}/`} exact>
                    <Login />
                </Route>
                <Route path={`${match.path}/signup`} exact>
                    <Signup />
                </Route>
            </Switch>
        </>
    )
}

export default Auth
