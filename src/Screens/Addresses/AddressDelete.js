import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class AddressDelete extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Address", title:"Addresses"},
      {link:null, title:"Delete Address"}
    ];

    return (
      <Container className="AddressDeleteScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default AddressDelete;