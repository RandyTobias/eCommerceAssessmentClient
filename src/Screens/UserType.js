import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AuthService from '../Services/AuthService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class UserType extends Component {
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
    const { currentUser, showStaffContent, showAdminContent } = this.state;
    const parts = [
      { link: "/", title: "Home" },
      { link: null, title: "UserTypes" }
    ];


    console.log("Current User: ");
    console.log(currentUser);

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