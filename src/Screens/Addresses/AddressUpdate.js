import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class AddressUpdate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Address", title:"Addresses"},
      {link:null, title:"Update Address"}
    ];

    return (
      <Container className="AddressUpdateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default AddressUpdate;