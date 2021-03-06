import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';

import AuthService from '../../Services/AuthService';
import AccessService from '../../Services/AccessService';
import UserService from '../../Services/UserService';

import BreadCrumbs from '../../Components/BreadCrumbs';

import '../../CSS/CreateScreen.css';
import UserTypeService from '../../Services/UserTypeService';

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this);

    this.state = {
      isFetching: false,
      userData: {},
      email: "",
      password: "",
      fName: "",
      lName: "",
      type: "",
      loading: false,
    };

    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
  }

  async fetchDataAsync(user) {
    try {
      this.setState({ ...this.state, isFetching: true });
      if (user){
        const response = await UserService.userGet(user.nameid);
        const userTypes = await UserTypeService.userTypeGetAll();
        this.setState({ ...this.state, userTypes: userTypes, userData: response, isFetching: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  };

  async componentDidMount() {
    try {
      const ACLs = await AccessService.getAccessLevels();
      this.setState({ ...this.state, ...ACLs });

      await this.fetchDataAsync(this.user);
    }
    catch (e) {
      console.log(e);
    }
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleFNameChange(e) {
    this.setState({
      fName: e.target.value
    });
  }

  handleLNameChange(e) {
    this.setState({
      lName: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleTypeChange(e) {
    let opt = e.target.options[e.target.selectedIndex];

    this.setState({
      type: opt.value
    });
  }

  handleCreate(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    let payload = {
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      password: this.state.password || '',
      type: parseInt(this.state.type),
    };

    UserService.userAdd(payload).then(
      () => {
        this.setState({loading:false});
        this.props.history.goBack();
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
  }

  render() {
    const parts = [
      { link: "/", title: "Home" },
      { link: "/User", title: "Users" },
      { link: null, title: "Create User" }
    ];

    return (
      <Container className="CreateScreen">
        <BreadCrumbs parts={parts} />

        <Container className="Data">
          <Form 
            onSubmit={(e) =>this.handleCreate(e)}
            ref={c => {
              this.form = c;
            }}  
          >

            <Form.Group as={Row}>
              <Form.Label column htmlFor="fName" sm={4}>First Name:</Form.Label>
              <Col sm={8}>
                <span className="data">
                  <Form.Control
                  className="inputData"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => this.handleFNameChange(e)}
                    value={this.state.fName ? this.state.fName : ''}
                  />
                </span>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column htmlFor="lName" sm={4}>Last Name</Form.Label>
              <Col sm={8}>
                <span className="data">
                  <Form.Control
                  className="inputData"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => this.handleLNameChange(e)}
                    value={this.state.lName ? this.state.lName : ''}
                  />
                </span>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column htmlFor="email" sm={4}>Email Address:</Form.Label>
              <Col sm={8}>
                <span className="data">
                  <Form.Control
                  className="inputData"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => this.handleEmailChange(e)}
                    value={this.state.email ? this.state.email : ''}
                  />
                </span>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column htmlFor="password" sm={4}>Password:</Form.Label>
              <Col sm={8}>
                <span className="data">
                  <Form.Control
                    className="inputData"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => this.handlePasswordChange(e)}
                    value={this.state.password ? this.state.password : ''}
                  />
                </span>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column htmlFor="userType" sm={4}>User Type:</Form.Label>
              <Col sm={8}>
                <span className="data">
                  <Form.Control
                  className="inputData"
                    as="select"
                    onChange={(e) => this.handleTypeChange(e)}
                    value={this.state.type ? this.state.type : ''}
                  >
                    <React.Fragment>
                      {
                        (
                          this.state.userTypes &&
                          Object.keys(this.state.userTypes).length !== 0
                        ) ? this.state.userTypes.map(type => {
                          return (
                            <option value={type.id} key={type.id}>{type.type}</option>
                          );
                        }) : null 
                      }
                    </React.Fragment>
                  </Form.Control>
                </span>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Create User</span>
              </button>
            </Form.Group>

          </Form>
        </Container>

      </Container>
    );
  }
}
export default UserCreate;