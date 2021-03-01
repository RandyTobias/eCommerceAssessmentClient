import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ShippingProviderAll extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/ShippingProvider", title:"ShippingProviders"},
      {link:null, title:"All ShippingProviders"}
    ];

    return (
      <Container className="ShippingProviderAllScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ShippingProviderAll;