import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import WithAuth from '../HOCs/WithAuth';
// import Auth from '../Services/Auth';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class LogIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmailChange = async event => {
        await this.setState({ email: event.target.value });
    }

    handlePasswordChange = async event => {
        await this.setState({ password: event.target.value });
    }

    handleSubmit = async (event, auth) => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        await axios.post(`http://localhost:5000/Auth/login`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.data);
                var token = res.data.data;
                // var auth = new Auth();
                auth.setToken(token);
            })
    }

    render() {
        return (
            <Container className="LogInScreen">
                <WithAuth>
                    {
                        (auth) => {
                            return (
                                <div>
                                    {!auth.isAuthenticated() ?

                                        <Form onSubmit={(e) => this.handleSubmit(e, auth)}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className="float-left">Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label className="float-left">Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                                            </Form.Group>
                                            <Button className="float-left" variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>

                                        : <Redirect to="/" />}
                                </div>
                            )
                        }
                    }
                </WithAuth>

            </Container>
        )
    }
}
export default LogIn;