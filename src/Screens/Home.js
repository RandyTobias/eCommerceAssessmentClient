import React, { Component } from 'react';


import { Container } from 'react-bootstrap';

import AccessService from '../Services/AccessService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { };
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
    const parts = [
      { link: "/", title: "Home" }
    ];

    const { showCustomerContent, showStaffContent, showAdminContent } = this.state;

    return (
      <Container className="HomeScreen">
        <BreadCrumbs parts={parts} />

        {showCustomerContent && (
          <React.Fragment>
            <CardNav
              title={"Profile"}
              text={""}
              linkTarget={"/Users/UserUpdate"}
              linkText={"Profile"}
            />
            <CardNav
              title={"Addresses"}
              text={""}
              linkTarget={"/Address"}
              linkText={"Addresses"}
            />
            <CardNav
              title={"Order History"}
              text={""}
              linkTarget={"/Transaction"}
              linkText={"Orders"}
            />
          </React.Fragment>
        )}

        {(showStaffContent || showAdminContent) && (
          <React.Fragment>
            <CardNav
              title={"Users"}
              text={""}
              linkTarget={"/User"}
              linkText={"Users"}
            />
            <CardNav
              title={"User Types"}
              text={""}
              linkTarget={"/UserType"}
              linkText={"User Types"}
            />
            <CardNav
              title={"Addresses"}
              text={""}
              linkTarget={"/Address"}
              linkText={"Addresses"}
            />
            <CardNav
              title={"Shipping Providers"}
              text={""}
              linkTarget={"/ShippingProvider"}
              linkText={"Shipping Providers"}
            />
            <CardNav
              title={"Products"}
              text={""}
              linkTarget={"/Product"}
              linkText={"Products"}
            />
            <CardNav
              title={"Orders"}
              text={""}
              linkTarget={"/Order"}
              linkText={"Orders"}
            />
            <CardNav
              title={"Transactions"}
              text={""}
              linkTarget={"/Transaction"}
              linkText={"Transactions"}
            />
          </React.Fragment>
        )}


      </Container>
    )
  }
}
export default Home;