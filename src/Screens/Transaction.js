import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import AccessService from '../Services/AccessService';

import BreadCrumbs from '../Components/BreadCrumbs';
import CardNav from '../Components/CardNav';

class Transaction extends Component {
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