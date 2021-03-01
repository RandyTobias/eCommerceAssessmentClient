import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class OrderAll extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Order", title:"Orders"},
      {link:null, title:"All Orders"}
    ];

    return (
      <Container className="OrderAllScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default OrderAll;