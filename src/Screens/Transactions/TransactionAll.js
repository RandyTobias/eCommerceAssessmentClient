import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class TransactionAll extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Transaction", title:"Transactions"},
      {link:null, title:"All Transactions"}
    ];

    return (
      <Container className="TransactionAllScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default TransactionAll;