import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ShippingProviderCreate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/ShippingProvider", title:"ShippingProviders"},
      {link:null, title:"Create ShippingProvider"}
    ];

    return (
      <Container className="ShippingProviderCreateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ShippingProviderCreate;