import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AccessService from '../Services/AccessService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class Address extends Component {
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