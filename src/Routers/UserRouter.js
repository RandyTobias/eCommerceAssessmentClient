import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import UserGet from '../Screens/Users/UserGet';
import UserAll from '../Screens/Users/UserAll';
import UserUpdate from '../Screens/Users/UserUpdate';
import UserDelete from '../Screens/Users/UserDelete';
import UserCreate from '../Screens/Users/UserCreate';
import withAuth from '../HOCs/withAuth';

class UserRouter extends Component {

    render() {
        return (
            <React.Fragment key='UserRouter'>
                <Route path='/Users/UserGet' component={withAuth(UserGet)} />
                <Route path='/Users/UserAll' component={withAuth(UserAll)} />
                <Route path='/Users/UserCreate' component={withAuth(UserCreate)} />
                <Route path='/Users/UserUpdate' component={withAuth(UserUpdate)} />
                <Route path='/Users/UserDelete' component={withAuth(UserDelete)} />
            </React.Fragment>
        );
    }
}
export default UserRouter;
