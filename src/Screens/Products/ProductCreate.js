import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ProductCreate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Product", title:"Products"},
      {link:null, title:"Create Product"}
    ];

    return (
      <Container className="ProductCreateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ProductCreate;