import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ProductAll extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Product", title:"Products"},
      {link:null, title:"All Products"}
    ];

    return (
      <Container className="ProductAllScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ProductAll;