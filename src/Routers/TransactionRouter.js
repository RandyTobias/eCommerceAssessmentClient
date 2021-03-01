import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import TransactionGet from '../Screens/Transactions/TransactionGet';
import TransactionAll from '../Screens/Transactions/TransactionAll';
import TransactionUpdate from '../Screens/Transactions/TransactionUpdate';
import TransactionDelete from '../Screens/Transactions/TransactionDelete';
import TransactionCreate from '../Screens/Transactions/TransactionCreate';
import withAuth from '../HOCs/withAuth';

class TransactionRouter extends Component {

    render() {
        return (
            <React.Fragment key='TransactionRouter'>
                <Route path='/Transactions/TransactionGet' component={withAuth(TransactionGet)} />
                <Route path='/Transactions/TransactionAll' component={withAuth(TransactionAll)} />
                <Route path='/Transactions/TransactionCreate' component={withAuth(TransactionCreate)} />
                <Route path='/Transactions/TransactionUpdate' component={withAuth(TransactionUpdate)} />
                <Route path='/Transactions/TransactionDelete' component={withAuth(TransactionDelete)} />
            </React.Fragment>
        );
    }
}
export default TransactionRouter;
