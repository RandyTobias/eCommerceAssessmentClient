import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import ShippingProviderGet from '../Screens/ShippingProviders/ShippingProviderGet';
import ShippingProviderAll from '../Screens/ShippingProviders/ShippingProviderAll';
import ShippingProviderUpdate from '../Screens/ShippingProviders/ShippingProviderUpdate';
import ShippingProviderDelete from '../Screens/ShippingProviders/ShippingProviderDelete';
import ShippingProviderCreate from '../Screens/ShippingProviders/ShippingProviderCreate';
import withAuth from '../HOCs/withAuth';

class ShippingProviderRouter extends Component {

    render() {
        return (
            <React.Fragment key='ShippingProviderRouter'>
                <Route path='/ShippingProviders/ShippingProviderGet' component={withAuth(ShippingProviderGet)} />
                <Route path='/ShippingProviders/ShippingProviderAll' component={withAuth(ShippingProviderAll)} />
                <Route path='/ShippingProviders/ShippingProviderCreate' component={withAuth(ShippingProviderCreate)} />
                <Route path='/ShippingProviders/ShippingProviderUpdate' component={withAuth(ShippingProviderUpdate)} />
                <Route path='/ShippingProviders/ShippingProviderDelete' component={withAuth(ShippingProviderDelete)} />
            </React.Fragment>
        );
    }
}
export default ShippingProviderRouter;
