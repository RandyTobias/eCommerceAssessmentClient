import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AccessService from '../Services/AccessService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class UserType extends Component {
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
    const { showStaffContent, showAdminContent } = this.state;
    const parts = [
      { link: "/", title: "Home" },
      { link: null, title: "UserTypes" }
    ];

    return (
      <Container className="UserTypeScreen">
        <BreadCrumbs parts={parts} />

        {showStaffContent && (
          <React.Fragment>
            <CardNav
              title={"UserType"}
              text={""}
              linkTarget={"/UserTypes/UserTypeGet"}
              linkText={"Get a UserType"}
            />
            <CardNav
              title={"All UserTypes"}
              text={""}
              linkTarget={"/UserTypes/UserTypeAll"}
              linkText={"Get All UserTypes"}
            />
          </React.Fragment>
        )}

        {showAdminContent && (
          <React.Fragment>
            <CardNav
              title={"UserType"}
              text={""}
              linkTarget={"/UserTypes/UserTypeGet"}
              linkText={"Get a UserType"}
            />
            <CardNav
              title={"All UserTypes"}
              text={""}
              linkTarget={"/UserTypes/UserTypeAll"}
              linkText={"Get All UserTypes"}
            />
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/UserTypes/UserTypeCreate"}
              linkText={"Create a UserType"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/UserTypes/UserTypeUpdate"}
              linkText={"Update a UserType"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/UserTypes/UserTypeDelete"}
              linkText={"Delete a UserType"}
            />
          </React.Fragment>
        )}
      </Container>
    )
  }
}
export default UserType;