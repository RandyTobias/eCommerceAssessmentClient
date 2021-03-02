import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AccessService from '../Services/AccessService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class ShippingProvider extends Component {
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
      { link: null, title: "Shipping Providers" }
    ];

    return (
      <Container className="ShippingProviderScreen">
        <BreadCrumbs parts={parts} />

        {showStaffContent && (
          <React.Fragment>
            <CardNav
              title={"ShippingProvider"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderGet"}
              linkText={"Get a ShippingProvider"}
            />
            <CardNav
              title={"All ShippingProviders"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderAll"}
              linkText={"Get All ShippingProviders"}
            />
          </React.Fragment>
        )}

        {showAdminContent && (
          <React.Fragment>
            <CardNav
              title={"Shipping Provider"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderGet"}
              linkText={"Get a Shipping Provider"}
            />
            <CardNav
              title={"All Shipping Providers"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderAll"}
              linkText={"Get All Shipping Providers"}
            />
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderCreate"}
              linkText={"Create a Shipping Provider"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderUpdate"}
              linkText={"Update a Shipping Provider"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderDelete"}
              linkText={"Delete a Shipping Provider"}
            />
          </React.Fragment>
        )}


      </Container>
    )
  }
}
export default ShippingProvider;