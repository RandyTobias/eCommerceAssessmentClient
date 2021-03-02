import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AccessService from '../Services/AccessService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    try{
      const ACLs = await AccessService.getAccessLevels();
      this.setState({...this.state, ...ACLs});
    }
    catch(e){
      console.log(e);
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