import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import AddressGet from '../Screens/Addresses/AddressGet';
import AddressAll from '../Screens/Addresses/AddressAll';
import AddressUpdate from '../Screens/Addresses/AddressUpdate';
import AddressDelete from '../Screens/Addresses/AddressDelete';
import AddressCreate from '../Screens/Addresses/AddressCreate';
import withAuth from '../HOCs/withAuth';

class AddressRouter extends Component {

    render() {
        return (
            <React.Fragment key='AddressRouter'>
                <Route path='/Addresses/AddressGet' component={withAuth(AddressGet)} />
                <Route path='/Addresses/AddressAll' component={withAuth(AddressAll)} />
                <Route path='/Addresses/AddressCreate' component={withAuth(AddressCreate)} />
                <Route path='/Addresses/AddressUpdate' component={withAuth(AddressUpdate)} />
                <Route path='/Addresses/AddressDelete' component={withAuth(AddressDelete)} />
            </React.Fragment>
        );
    }
}
export default AddressRouter;
