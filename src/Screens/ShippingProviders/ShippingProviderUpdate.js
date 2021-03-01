import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class ShippingProviderTypeUpdate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/ShippingProviderType", title:"ShippingProviderTypes"},
      {link:null, title:"Update ShippingProviderType"}
    ];

    return (
      <Container className="ShippingProviderTypeUpdateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default ShippingProviderTypeUpdate;