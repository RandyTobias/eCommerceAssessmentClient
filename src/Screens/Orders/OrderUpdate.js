import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class OrderUpdate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Order", title:"Orders"},
      {link:null, title:"Update Order"}
    ];

    return (
      <Container className="OrderUpdateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default OrderUpdate;