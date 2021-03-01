import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AuthService from '../Services/AuthService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
      showCustomerContent: false,
      showStaffContent: false,
      showAdminContent: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showCustomerContent: user.role === (3).toString(),
        showStaffContent: user.role === (2).toString(),
        showAdminContent: user.role === (1).toString(),
      });
    }
  }

  render() {
    const { showCustomerContent, showStaffContent, showAdminContent } = this.state;
    const parts = [
      { link: "/", title: "Home" },
      { link: null, title: "Addresss" }
    ];

    return (
      <Container className="AddressScreen">
        <BreadCrumbs parts={parts} />

        {showCustomerContent && (
          <React.Fragment>
            <CardNav
              title={"Address"}
              text={""}
              linkTarget={"/Addresses/AddressGet"}
              linkText={"Get a Address"}
            />
            <CardNav
              title={"All Addresss"}
              text={""}
              linkTarget={"/Addresses/AddressAll"}
              linkText={"Get All Addresses"}
            />
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/Addresses/AddressCreate"}
              linkText={"Create a Address"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/Addresses/AddressUpdate"}
              linkText={"Update a Address"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/Addresses/AddressDelete"}
              linkText={"Delete a Address"}
            />
          </React.Fragment>
        )}

        {showStaffContent && (
          <React.Fragment>
            <CardNav
              title={"Address"}
              text={""}
              linkTarget={"/Addresses/AddressGet"}
              linkText={"Get a Address"}
            />
            <CardNav
              title={"All Addresss"}
              text={""}
              linkTarget={"/Addresses/AddressAll"}
              linkText={"Get All Addresses"}
            />
          </React.Fragment>
        )}

        {showAdminContent && (
          <React.Fragment>
            <CardNav
              title={"Address"}
              text={""}
              linkTarget={"/Addresses/AddressGet"}
              linkText={"Get a Address"}
            />
            <CardNav
              title={"All Addresss"}
              text={""}
              linkTarget={"/Addresses/AddressAll"}
              linkText={"Get All Addresses"}
            />
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/Addresses/AddressCreate"}
              linkText={"Create a Address"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/Addresses/AddressUpdate"}
              linkText={"Update a Address"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/Addresses/AddressDelete"}
              linkText={"Delete a Address"}
            />
          </React.Fragment>
        )}


      </Container>
    )
  }
}
export default Address;