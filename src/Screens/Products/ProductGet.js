import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ProductGet extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Product", title:"Products"},
      {link:null, title:"Get Product"}
    ];

    return (
      <Container className="ProductGetScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ProductGet;