//import logo from './logo.svg';
import './CSS/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { 
  Row, 
  Col, 
  Container 
} from 'react-bootstrap';

import AuthRoute from './HOCs/AuthRoute';

import Auth from './Services/Auth';
import { AuthProvider } from './HOCs/AuthProvider';

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

const authService = new Auth();

function App() {

  return (
    <div className="App">
      <Container>
        <AuthProvider service={authService}>
          <Router>

            <Container id="Header">
              <Row>
                  <Col xs={0} md={2}></Col>
                  <Col xs={12} md={8}>
                    <TopNavBar/>
                  </Col>
                  <Col xs={0} md={2}></Col>
              </Row>
            </Container>

            <Container id="Body">
              <Row>
                <Col xs={0} md={2}></Col>
                <Col xs={12} md={8}>     
                  <Switch>
                    
                    <Route path="/LogIn">
                      <LogIn />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                  <Switch>
                    <AuthRoute exact path='/' component={Home}/>
                    <AuthRoute path='/Users' component={User}/>
                    <AuthRoute path='/UserType' component={UserType} />
                    <AuthRoute path='/Orders' component={Order} />
                    <AuthRoute path='/Transactions' component={Transaction} />
                    <AuthRoute path='/Addresses' component={Address} />
                    <AuthRoute path='/Products' component={Product} />
                    <AuthRoute path='/ShippingProviders' component={ShippingProvider} />
                    <Route path='/Registration' component={Registration} />
                    <Route path='/LogIn' component={LogIn}/>
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
        </AuthProvider>
     </Container>
   </div>
  );
}

export default App;
