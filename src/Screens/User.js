import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AuthService from '../Services/AuthService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class User extends Component {
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
      { link: null, title: "Users" }
    ];

    return (
      <Container className="UserScreen">
        <BreadCrumbs parts={parts} />

        {showStaffContent && (
          <React.Fragment>
            <CardNav
              title={"User"}
              text={""}
              linkTarget={"/Users/UserGet"}
              linkText={"Get a User"}
            />
            <CardNav
              title={"All Users"}
              text={""}
              linkTarget={"/Users/UserAll"}
              linkText={"Get All Users"}
            />
          </React.Fragment>
        )}

        {showAdminContent && (
          <React.Fragment>
            <CardNav
              title={"User"}
              text={""}
              linkTarget={"/Users/UserGet"}
              linkText={"Get a User"}
            />
            <CardNav
              title={"All Users"}
              text={""}
              linkTarget={"/Users/UserAll"}
              linkText={"Get All Users"}
            />
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/Users/UserCreate"}
              linkText={"Create a User"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/Users/UserUpdate"}
              linkText={"Update a User"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/Users/UserDelete"}
              linkText={"Delete a User"}
            />
          </React.Fragment>
        )}



      </Container>
    )
  }
}
export default User;