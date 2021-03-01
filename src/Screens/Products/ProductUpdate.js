import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ProductUpdate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Product", title:"Products"},
      {link:null, title:"Update Product"}
    ];

    return (
      <Container className="ProductUpdateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ProductUpdate;