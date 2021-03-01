import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AuthService from '../Services/AuthService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class Transaction extends Component {
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
      { link: null, title: "Transactions" }
    ];

    return (
      <Container className="TransactionScreen">
        <BreadCrumbs parts={parts} />

        {showStaffContent && (
          <React.Fragment>
            <CardNav
              title={"Transaction"}
              text={""}
              linkTarget={"/Transactions/TransactionGet"}
              linkText={"Get a Transaction"}
            />
            <CardNav
              title={"All Transactions"}
              text={""}
              linkTarget={"/Transactions/TransactionAll"}
              linkText={"Get All Transactions"}
            />
          </React.Fragment>
        )}

        {showAdminContent && (
          <React.Fragment>
            <CardNav
              title={"Transaction"}
              text={""}
              linkTarget={"/Transactions/TransactionGet"}
              linkText={"Get a Transaction"}
            />
            <CardNav
              title={"All Transactions"}
              text={""}
              linkTarget={"/Transactions/TransactionAll"}
              linkText={"Get All Transactions"}
            />
            <CardNav
              title={"Create"}
              text={""}
              linkTarget={"/Transactions/TransactionCreate"}
              linkText={"Create a Transaction"}
            />
            <CardNav
              title={"Update"}
              text={""}
              linkTarget={"/Transactions/TransactionUpdate"}
              linkText={"Update a Transaction"}
            />
            <CardNav
              title={"Delete"}
              text={""}
              linkTarget={"/Transactions/TransactionDelete"}
              linkText={"Delete a Transaction"}
            />
          </React.Fragment>
        )}


      </Container>
    )
  }
}
export default Transaction;