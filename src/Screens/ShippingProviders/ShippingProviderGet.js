import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ShippingProviderGet extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/ShippingProvider", title:"ShippingProviders"},
      {link:null, title:"Get ShippingProvider"}
    ];

    return (
      <Container className="ShippingProviderGetScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ShippingProviderGet;