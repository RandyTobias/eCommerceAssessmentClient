import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import CardNav from './CardNav';

class NotLoggedIn extends Component {
    render() {
        return (
            <Container className="NotLoggedIn">
                <CardNav
                    title={"Log In"}
                    text={""}
                    linkTarget={"/LogIn"}
                    linkText={"Log In"}
                />
                <CardNav
                    title={"Register"}
                    text={"If you don't have an account, please register to use this site."}
                    linkTarget={"/Register"}
                    linkText={"Register"}
                />
            </Container>
        )
    }
}
export default NotLoggedIn;