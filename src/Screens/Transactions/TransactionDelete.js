import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class TransactionDelete extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Transaction", title:"Transactions"},
      {link:null, title:"Delete Transaction"}
    ];

    return (
      <Container className="TransactionDeleteScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default TransactionDelete;