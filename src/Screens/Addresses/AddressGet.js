import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class AddressGet extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Address", title:"Addresses"},
      {link:null, title:"Get Address"}
    ];

    return (
      <Container className="AddressGetScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default AddressGet;