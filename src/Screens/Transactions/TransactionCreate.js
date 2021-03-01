import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class TransactionCreate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Transaction", title:"Transactions"},
      {link:null, title:"Create Transaction"}
    ];

    return (
      <Container className="TransactionCreateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default TransactionCreate;