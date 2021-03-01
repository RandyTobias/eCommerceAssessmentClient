//import logo from './logo.svg';
import './CSS/App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';

import Home from './Screens/Home';
import LogIn from './Screens/LogIn';
import Registration from './Screens/Registration';
import User from './Screens/User';
import UserType from './Screens/UserType';
import Address from './Screens/Address';
import Product from './Screens/Product';
import Order from './Screens/Order';
import Transaction from './Screens/Transaction';
import ShippingProvider from './Screens/ShippingProvider';

import TopNavBar from './Components/TopNavBar';

import withAuth from './HOCs/withAuth';

import UserRouter from './Routers/UserRouter';
import UserTypeRouter from './Routers/UserTypeRouter';
import AddressRouter from './Routers/AddressRouter';
import ShippingProviderRouter from './Routers/ShippingProviderRouter';
import ProductRouter from './Routers/ProductRouter';
import OrderRouter from './Routers/OrderRouter';
import TransactionRouter from './Routers/TransactionRouter';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <Router>

            <Container id="Header">
              <Row>
                {/* <Col xs={0} md={2}></Col>
                <Col xs={12} md={8}> */}
                <Col xs={12}>
                  <TopNavBar />
                </Col>
                {/* </Col>
                <Col xs={0} md={2}></Col> */}
              </Row>
            </Container>

            <Container id="Body">
              <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={8}>

                  <Switch>
                    <Route exact path='/' component={withAuth(Home)} />
                    <Route path='/User' component={withAuth(User)} />
                    <Route path='/UserType' component={withAuth(UserType)} />
                    <Route path='/Order' component={withAuth(Order)} />
                    <Route path='/Transaction' component={withAuth(Transaction)} />
                    <Route path='/Address' component={withAuth(Address)} />
                    <Route path='/Product' component={withAuth(Product)} />
                    <Route path='/ShippingProvider' component={withAuth(ShippingProvider)} />
                    <Route path='/Registration' component={Registration} />
                    <Route path='/LogIn' component={LogIn} />
                    <React.Fragment>
                      <UserTypeRouter />
                      <UserRouter />
                      <AddressRouter />
                      <ShippingProviderRouter />
                      <ProductRouter />
                      <OrderRouter />
                      <TransactionRouter />
                    </React.Fragment>
                  </Switch>

                </Col>
                <Col xs={0} md={2}></Col>
              </Row>
            </Container>

            <Container id="Footer">
              <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={8}>

                </Col>
                <Col xs={0} md={2}></Col>
              </Row>
            </Container>

          </Router>

        </Container>
      </div>
    );
  }
}
export default App;
