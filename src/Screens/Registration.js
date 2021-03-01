import React, { Component } from 'react';


import { Container } from 'react-bootstrap';

import BreadCrumbs from '../Components/BreadCrumbs';

class Registration extends Component {
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:null, title:"Registration"}
    ];

    return (
      <Container className="RegistrationScreen">
        <BreadCrumbs parts={parts}/>
      </Container>
    )
  }
}
export default Registration;