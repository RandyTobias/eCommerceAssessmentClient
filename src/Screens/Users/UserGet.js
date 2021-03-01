import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

import AuthService from '../../Services/AuthService';
import UserService from '../../Services/UserService';

import BreadCrumbs from '../../Components/BreadCrumbs';

import '../../CSS/GetScreen.css';

class UserGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      currentUser: undefined,
      userData: {},
      showAdminContent: false,
      showStaffContent: false,
      showCustomerContent: false,
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
      this.setState({ ...ACLs, userData: response, isFetching: false });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  };

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
  }

  render() {
    let showStaffContent, showAdminContent = null;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/User", title: "Users" },
      { link: null, title: "Get User" }
    ];
    const userTypes = { 1: "Administrator", 2: "Staff", 3: "Customer" };

    showStaffContent = this.state.showStaffContent;
    showAdminContent = this.state.showAdminContent;

    return (
      <Container className="GetScreen">
        <BreadCrumbs parts={parts} />

        <Container className="Data">
          <Form>
            {(showStaffContent || showAdminContent) && (
              <Form.Group>
                <Row>
                  <Col className="label">
                    <label>Id:</label>
                  </Col>
                  <Col>
                    <span className="data">
                      {this.state.userData && this.state.userData.id ? this.state.userData.id : ''}
                    </span>
                  </Col>
                </Row>
              </Form.Group>
            )}

            <Form.Group>
              <Row>
                <Col className="label">
                  <label>First Name:</label>
                </Col>
                <Col>
                  <span className="data">
                    {this.state.userData && this.state.userData.fName ? this.state.userData.fName : ''}
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
                    {this.state.userData && this.state.userData.lName ? this.state.userData.lName : ''}
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
                    {this.state.userData && this.state.userData.email ? this.state.userData.email : ''}
                  </span>
                </Col>
              </Row>
            </Form.Group>
          </Form>

          {(showStaffContent || showAdminContent) && (
            <Row>
              <Col className="label">
                <label>User Type:</label>
              </Col>
              <Col>
                <span className="data">
                  {this.state.userData && this.state.userData.typeid && userTypes[this.state.userData.typeid] ? userTypes[this.state.userData.typeid] : ''}
                </span>
              </Col>
            </Row>
          )}
        </Container>
      </Container>
    );
  }
}
export default UserGet;