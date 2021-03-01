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

import '../../CSS/DeleteScreen.css';

class UserTypeDelete extends Component {
  constructor(props) {
    super(props);
    this.handleIdChange = this.handleIdChange.bind(this);

    this.state = {
      isFetching: false,
      currentUser: undefined,
      userData: {},
      content: {},
      showAdminContent: false,
      showStaffContent: false,
      showCustomerContent: false,
      userTypeId: "",
      type: "",
      accessLevel: "",
      loading: false,
    };

    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
  }

  async fetchDataAsync(user) {
    try {
      this.setState({ ...this.state, isFetching: true });
      //Get User Permissions
      const response = await UserService.userGet(user.nameid);
      let ACLs = {
        showCustomerContent: response.typeid === 3,
        showStaffContent: response.typeid === 2,
        showAdminContent: response.typeid === 1
      };
      //get all user types
      const content = await UserTypeService.userTypeGetAll();
      //get user type info of selected user type because user types from the getAll aren't indexed by typeId.
      if (this.state.userTypeId !== "") {
        const response2 = await UserTypeService.userTypeGet(this.state.userTypeId);
        let data = {
          userTypeId: response2.id,
          type: response2.type,
          accessLevel: response2.accessLevel,
        };
        this.setState({ ...ACLs, ...data, userData: response, content: content, isFetching: false });
      }
      else {
        this.setState({ ...ACLs, userData: response, content: content, isFetching: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  };

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
  }

  async handleIdChange(e) {
    let opt = e.target.options[e.target.selectedIndex];

    try {
      this.setState({ ...this.state, isFetching: true });
      let data = {};
      if (opt.value !== null && opt.value !== "") {
        let response = await UserTypeService.userTypeGet(opt.value);
        data = {
          userTypeId: response.id,
          type: response.type,
          accessLevel: response.accessLevel,
        };
      }
      else {
        data = {
          userTypeId: "",
          type: "",
          accessLevel: "",
        };
      }
      this.setState({ ...this.state, ...data, isFetching: false });
    }
    catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  }

  handleDelete(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    UserTypeService.userTypeDelete(this.state.userTypeId).then(
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
    let showAdminContent = null;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/UserType", title: "User Types" },
      { link: null, title: "Delete User Type" }
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
                  <Form.Label column htmlFor="userId" sm={4}>User Type Id:</Form.Label>
                  <Col sm={8}>
                    <span className="data">
                      <Form.Control
                        className="inputData"
                        as="select"
                        onChange={(e) => this.handleIdChange(e)}
                        value={this.state.userTypeId ? this.state.userTypeId : ''}
                      >
                        <option value=""></option>
                        <React.Fragment>
                          {this.state.content.map(userType => {
                            return (
                              <option value={userType.id} key={userType.id}>{userType.id}</option>
                            );
                          })}
                        </React.Fragment>
                      </Form.Control>
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col className="label">
                      <label>User Type:</label>
                    </Col>
                    <Col>
                      <span className="data">
                        {this.state.type ? this.state.type : ''}
                      </span>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col className="label">
                      <label>Access Level:</label>
                    </Col>
                    <Col>
                      <span className="data">
                        {this.state.accessLevel ? this.state.accessLevel : ''}
                      </span>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group as={Row}>
                  <button
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Delete User Type</span>
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
export default UserTypeDelete;