import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AuthService from '../Services/AuthService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class Product extends Component {
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
      { link: null, title: "Products" }
    ];

    return (
      <Container className="ProductScreen">
        <BreadCrumbs parts={parts} />

        {showStaffContent && (
          <React.Fragment>
            <CardNav
              title={"Product"}
              text={""}
              linkTarget={"/Products/ProductGet"}
              linkText={"Get a Product"}
            />
            <CardNav
              title={"All Products"}
              text={""}
              linkTarget={"/Products/ProductAll"}
              linkText={"Get All Products"}
            />
          </React.Fragment>
        )}

        {showAdminContent && (
          <React.Fragment>
            <CardNav
              title={"Product"}
              text={""}
              linkTarget={"/Products/ProductGet"}
              linkText={"Get a Product"}
            />
            <CardNav
              title={"All Products"}
              text={""}
              linkTarget={"/Products/ProductAll"}
              linkText={"Get All Products"}
            />
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/Products/ProductCreate"}
              linkText={"Create a Product"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/Products/ProductUpdate"}
              linkText={"Update a Product"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/Products/ProductDelete"}
              linkText={"Delete a Product"}
            />
          </React.Fragment>
        )}


      </Container>
    )
  }
}
export default Product;