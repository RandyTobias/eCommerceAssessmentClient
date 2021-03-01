import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class OrderCreate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Order", title:"Orders"},
      {link:null, title:"Create Order"}
    ];

    return (
      <Container className="OrderCreateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default OrderCreate;