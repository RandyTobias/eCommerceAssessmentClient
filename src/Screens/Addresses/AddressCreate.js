import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class AddressCreate extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Address", title:"Addresses"},
      {link:null, title:"Create Address"}
    ];

    return (
      <Container className="AddressCreateScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default AddressCreate;