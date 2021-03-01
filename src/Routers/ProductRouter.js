import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import ProductGet from '../Screens/Products/ProductGet';
import ProductAll from '../Screens/Products/ProductAll';
import ProductUpdate from '../Screens/Products/ProductUpdate';
import ProductDelete from '../Screens/Products/ProductDelete';
import ProductCreate from '../Screens/Products/ProductCreate';
import withAuth from '../HOCs/withAuth';

class ProductRouter extends Component {

    render() {
        return (
            <React.Fragment key='ProductRouter'>
                <Route path='/Products/ProductGet' component={withAuth(ProductGet)} />
                <Route path='/Products/ProductAll' component={withAuth(ProductAll)} />
                <Route path='/Products/ProductCreate' component={withAuth(ProductCreate)} />
                <Route path='/Products/ProductUpdate' component={withAuth(ProductUpdate)} />
                <Route path='/Products/ProductDelete' component={withAuth(ProductDelete)} />
            </React.Fragment>
        );
    }
}
export default ProductRouter;
