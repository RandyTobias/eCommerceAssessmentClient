import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AuthService from '../Services/AuthService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class ShippingProvider extends Component {
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
      { link: null, title: "ShippingProviders" }
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
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderCreate"}
              linkText={"Create a ShippingProvider"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderUpdate"}
              linkText={"Update a ShippingProvider"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/ShippingProviders/ShippingProviderDelete"}
              linkText={"Delete a ShippingProvider"}
            />
          </React.Fragment>
        )}


      </Container>
    )
  }
}
export default ShippingProvider;