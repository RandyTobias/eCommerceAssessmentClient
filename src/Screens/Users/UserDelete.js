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
import UserTypeService from '../../Services/UserTypeService';

import BreadCrumbs from '../../Components/BreadCrumbs';

import '../../CSS/DeleteScreen.css';

class UserDelete extends Component {
  constructor(props) {
    super(props);
    this.handleIdChange = this.handleIdChange.bind(this);

    this.state = {
      isFetching: false,
      userData: {},
      content: {},
      userId: "",
      fName: "",
      lName: "",
      email: "",
      typeid: "",
      userTypes: {},
      loading: false,
    };

    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
  }

  async fetchDataAsync(user) {
    try {
      this.setState({ ...this.state, isFetching: true });
      if (user) {
        //get info of logged in user for permissions
        const response = await UserService.userGet(user.nameid);
        let content = await UserService.userGetAll();
        //get user types for substitutions
        const userTypesArray = await UserTypeService.userTypeGetAll();
        let userTypes = {};
        userTypesArray.map((el) => { return userTypes[el.id] = el.type; });
        //get user data of user to delete (pulling anew because the all users array is not indexed by user id)
        if (this.state.userId !== null && this.state.userId !== "") {
          let response2 = await UserService.userGet(this.state.userId);
          const data = {
            userId: response2.id,
            fName: response2.fName,
            lName: response2.lName,
            email: response2.email,
            typeid: response2.typeid,
          }
          this.setState({ ...data, userData: response, userTypes: userTypes, content: content, isFetching: false });
        }
        else {
          this.setState({ userData: response, userTypes: userTypes, content: content, isFetching: false });
        }
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

  async handleIdChange(e) {
    let opt = e.target.options[e.target.selectedIndex];

    try {
      this.setState({ ...this.state, isFetching: true });
      let data = {};
      if (opt.value !== null && opt.value !== "") {

        const response = await UserService.userGet(opt.value);
        data = {
          userId: response.id,
          fName: response.fName,
          lName: response.lName,
          email: response.email,
          typeid: response.typeid,
        }
      }
      else {
        data = {
          userId: "",
          fName: "",
          lName: "",
          email: "",
          typeid: "",
        }
      }
      this.setState({ ...data, isFetching: false });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  }

  handleDelete(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    UserService.userDelete(this.state.userId).then(
      () => {
        this.setState({ loading: false });
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
    let showAdminContent = null;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/User", title: "Users" },
      { link: null, title: "Delete User" }
    ];

    showAdminContent = this.state.showAdminContent;

    return (
      <Container className="DeleteScreen">
        <BreadCrumbs parts={parts} />

        <Container className="Data">
          <Form
            onSubmit={(e) => this.handleDelete(e)}
            ref={c => {
              this.form = c;
            }}
          >

            {showAdminContent && (
              <React.Fragment>

                <Form.Group as={Row}>
                  <Form.Label column htmlFor="userId" sm={4}>User Id:</Form.Label>
                  <Col sm={8}>
                    <span className="data">
                      <Form.Control
                        className="inputData"
                        as="select"
                        onChange={(e) => this.handleIdChange(e)}
                        value={this.state.userId ? this.state.userId : ''}
                      >
                        <option value=""></option>
                        <React.Fragment>
                          {
                            (
                              this.state.content &&
                              Object.keys(this.state.content).length !== 0
                            ) ? this.state.content.map(user => {
                              return (
                                <option value={user.id} key={user.id}>{user.id}</option>
                              );
                            }) : null
                          }
                        </React.Fragment>
                      </Form.Control>
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col className="label">
                      <label>First Name:</label>
                    </Col>
                    <Col>
                      <span className="data">
                        {this.state.fName ? this.state.fName : ''}
                      </span>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col className="label">
                      <label>Last Name:</label>
                    </Col>
                    <Col>
                      <span className="data">
                        {this.state.lName ? this.state.lName : ''}
                      </span>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col className="label">
                      <label>Email Address:</label>
                    </Col>
                    <Col>
                      <span className="data">
                        {this.state.email ? this.state.email : ''}
                      </span>
                    </Col>
                  </Row>
                </Form.Group>

                {showAdminContent && (
                  <Row>
                    <Col className="label">
                      <label>User Type:</label>
                    </Col>
                    <Col>
                      <span className="data">
                        {this.state.typeid && this.state.userTypes[this.state.typeid] ? this.state.userTypes[this.state.typeid] : ''}
                      </span>
                    </Col>
                  </Row>
                )}

                <Form.Group as={Row}>
                  <button
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Delete User</span>
                  </button>
                </Form.Group>
              </React.Fragment>
            )}

          </Form>
        </Container>

      </Container>
    );
  }
}
export default UserDelete;