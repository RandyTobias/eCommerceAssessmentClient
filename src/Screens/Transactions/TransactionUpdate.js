import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class TransactionUpdate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Transaction", title:"Transactions"},
      {link:null, title:"Update Transaction"}
    ];

    return (
      <Container className="TransactionUpdateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default TransactionUpdate;