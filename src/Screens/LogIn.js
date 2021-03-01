/*
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

*/

import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { 
  Container,
} from 'react-bootstrap';

import AuthService from '../Services/AuthService';

import BreadCrumbs from '../Components/BreadCrumbs';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.history.push("/");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  
  render() {
    const parts = [
      {link:"/", title:"Home"},
      {link:null, title:"Log In"}
    ];

    return (
      <Container className="LogInScreen">
          <BreadCrumbs parts={parts}/>

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="email" className="float-left">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="float-left">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </Container>
    );
  }
}

export default LogIn;