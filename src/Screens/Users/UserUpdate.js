import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';

import AuthService from '../../Services/AuthService';
import UserService from '../../Services/UserService';
import UserTypeService from '../../Services/UserTypeService';

import BreadCrumbs from '../../Components/BreadCrumbs';

import '../../CSS/UpdateScreen.css';

class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this);

    this.state = {
      isFetching: false,
      currentUser: undefined,
      userData: {},
      showAdminContent: false,
      showStaffContent: false,
      showCustomerContent: false,
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
      const response = await UserService.userGet(user.nameid);
      let ACLs = {
        showCustomerContent: response.typeid === 3,
        showStaffContent: response.typeid === 2,
        showAdminContent: response.typeid === 1
      };
      let data = {
        id: response.id,
        fName: response.fName,
        lName: response.lName,
        email: response.email,
        password: response.password,
        type: response.type,
      }
      const userTypesArray = await UserTypeService.userTypeGetAll();
      let userTypes = {};
      userTypesArray.map( (el) => { return userTypes[el.id] = el.type;});
      this.setState({ ...ACLs, ...data, userData: response, isFetching: false });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  };

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
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

  handleUpdate(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    let payload = {
      id: this.state.userData.id,
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      password: this.state.password || '',
      type: parseInt(this.state.type),
    };

    UserService.userUpdate(payload).then(
      () => {
        this.setState({ loading: false });
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
    let showStaffContent, showAdminContent = null;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/User", title: "Users" },
      { link: null, title: "Update User" }
    ];
    // const userTypesArray = [
    //   { key: 1, type: "Administrator" },
    //   { key: 2, type: "Staff" },
    //   { key: 3, type: "Customer" }
    // ]
    console.log("User Data: ");
    console.log(this.state.userData);

    showStaffContent = this.state.showStaffContent;
    showAdminContent = this.state.showAdminContent;

    return (
      <Container className="UpdateScreen">
        <BreadCrumbs parts={parts} />

        <Container className="Data">
          <Form
            onSubmit={(e) => this.handleUpdate(e)}
            ref={c => {
              this.form = c;
            }}
          >

            {(showStaffContent || showAdminContent) && (
              <Form.Group as={Row}>
                <Form.Label column htmlFor="id" sm={4}>Id:</Form.Label>
                <Col sm={8}>
                  <span className="data">
                    <Form.Control
                      className="inputData"
                      plaintext
                      readOnly
                      defaultValue={this.state.userData && this.state.userData.id ? this.state.userData.id : ''}
                    />
                  </span>
                </Col>
              </Form.Group>
            )}

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

            {(showStaffContent || showAdminContent) && (
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
                        {this.state.userTypes.map(type => {
                          return (
                            <option value={type.id} key={type.id}>{type.type}</option>
                          );
                        })}
                      </React.Fragment>
                    </Form.Control>
                  </span>
                </Col>
              </Form.Group>
            )}

            <Form.Group as={Row}>
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Save Changes</span>
              </button>
            </Form.Group>

          </Form>
        </Container>

      </Container>
    );
  }
}
export default UserUpdate;