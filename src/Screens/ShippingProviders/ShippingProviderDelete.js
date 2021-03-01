import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ShippingProviderDelete extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/ShippingProvider", title:"ShippingProviders"},
      {link:null, title:"Delete ShippingProvider"}
    ];

    return (
      <Container className="ShippingProviderDeleteScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ShippingProviderDelete;