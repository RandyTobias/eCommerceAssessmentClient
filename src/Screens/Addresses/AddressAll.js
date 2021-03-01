import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import BreadCrumbs from '../../Components/BreadCrumbs';

class AddressAll extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:"/Address", title:"Addresses"},
      {link:null, title:"All Addresss"}
    ];

    return (
      <Container className="AddressAllScreen">
        <BreadCrumbs parts={parts}/>

        
      </Container>
    )
  }
}
export default AddressAll;