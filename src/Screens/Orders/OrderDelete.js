import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class OrderDelete extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Order", title:"Orders"},
      {link:null, title:"Delete Order"}
    ];

    return (
      <Container className="OrderDeleteScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default OrderDelete;