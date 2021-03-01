import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import UserTypeGet from '../Screens/UserTypes/UserTypeGet';
import UserTypeAll from '../Screens/UserTypes/UserTypeAll';
import UserTypeUpdate from '../Screens/UserTypes/UserTypeUpdate';
import UserTypeDelete from '../Screens/UserTypes/UserTypeDelete';
import UserTypeCreate from '../Screens/UserTypes/UserTypeCreate';
import withAuth from '../HOCs/withAuth';

class UserTypeRouter extends Component {

    render() {
        return (
            <React.Fragment key='UserTypeRouter'>
                <Route path='/UserTypes/UserTypeGet' component={withAuth(UserTypeGet)} />
                <Route path='/UserTypes/UserTypeAll' component={withAuth(UserTypeAll)} />
                <Route path='/UserTypes/UserTypeCreate' component={withAuth(UserTypeCreate)} />
                <Route path='/UserTypes/UserTypeUpdate' component={withAuth(UserTypeUpdate)} />
                <Route path='/UserTypes/UserTypeDelete' component={withAuth(UserTypeDelete)} />
            </React.Fragment>
        );
    }
}
export default UserTypeRouter;
