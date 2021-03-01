import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ProductDelete extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Product", title:"Products"},
      {link:null, title:"Delete Product"}
    ];

    return (
      <Container className="ProductDeleteScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ProductDelete;