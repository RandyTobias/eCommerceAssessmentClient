import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import OrderGet from '../Screens/Orders/OrderGet';
import OrderAll from '../Screens/Orders/OrderAll';
import OrderUpdate from '../Screens/Orders/OrderUpdate';
import OrderDelete from '../Screens/Orders/OrderDelete';
import OrderCreate from '../Screens/Orders/OrderCreate';
import withAuth from '../HOCs/withAuth';

class OrderRouter extends Component {

    render() {
        return (
            <React.Fragment key='OrderRouter'>
                <Route path='/Orders/OrderGet' component={withAuth(OrderGet)} />
                <Route path='/Orders/OrderAll' component={withAuth(OrderAll)} />
                <Route path='/Orders/OrderCreate' component={withAuth(OrderCreate)} />
                <Route path='/Orders/OrderUpdate' component={withAuth(OrderUpdate)} />
                <Route path='/Orders/OrderDelete' component={withAuth(OrderDelete)} />
            </React.Fragment>
        );
    }
}
export default OrderRouter;
