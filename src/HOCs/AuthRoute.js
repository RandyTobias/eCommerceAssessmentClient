import React from 'react';
import { Redirect, Route } from 'react-router';
import WithAuth from './WithAuth';

const AuthRoute = (props) => {
  return (
    <WithAuth>
      {
        (auth) => {
          return (
              auth.isAuthenticated() ?
                <Route {...props} />
                : <Redirect to="/login" />
          )
        }
      }
    </WithAuth>
  )
}

export default AuthRoute
