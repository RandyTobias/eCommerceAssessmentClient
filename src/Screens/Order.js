import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AuthService from '../Services/AuthService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
      showStaffContent: false,
      showAdminContent: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showStaffContent: user.role === (2).toString(),
        showAdminContent: user.role === (1).toString(),
      });
    }
  }

  render() {
    const { showStaffContent, showAdminContent } = this.state;
    const parts = [
      { link: "/", title: "Home" },
      { link: null, title: "Orders" }
    ];

    return (
      <Container className="OrderScreen">
        <BreadCrumbs parts={parts} />

        {showStaffContent && (
          <React.Fragment>
            <CardNav
              title={"Order"}
              text={""}
              linkTarget={"/Orders/OrderGet"}
              linkText={"Get a Order"}
            />
            <CardNav
              title={"All Orders"}
              text={""}
              linkTarget={"/Orders/OrderAll"}
              linkText={"Get All Orders"}
            />
          </React.Fragment>
        )}

        {showAdminContent && (
          <React.Fragment>
            <CardNav
              title={"Order"}
              text={""}
              linkTarget={"/Orders/OrderGet"}
              linkText={"Get a Order"}
            />
            <CardNav
              title={"All Orders"}
              text={""}
              linkTarget={"/Orders/OrderAll"}
              linkText={"Get All Orders"}
            />
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/Orders/OrderCreate"}
              linkText={"Create a Order"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/Orders/OrderUpdate"}
              linkText={"Update a Order"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/Orders/OrderDelete"}
              linkText={"Delete a Order"}
            />
          </React.Fragment>
        )}


      </Container>
    )
  }
}
export default Order;