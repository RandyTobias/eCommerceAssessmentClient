import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class OrderGet extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Order", title:"Orders"},
      {link:null, title:"Get Order"}
    ];

    return (
      <Container className="OrderGetScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default OrderGet;