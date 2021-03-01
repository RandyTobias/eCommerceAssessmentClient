import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class TransactionGet extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Transaction", title:"Transactions"},
      {link:null, title:"Get Transaction"}
    ];

    return (
      <Container className="TransactionGetScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default TransactionGet;