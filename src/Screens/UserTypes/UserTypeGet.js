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

class UserTypeUpdate extends Component {
  constructor(props) {
    super(props);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleAccessLevelChange = this.handleAccessLevelChange.bind(this);

    this.state = {
      isFetching: false,
      currentUserType: undefined,
      userData: {},
      showAdminContent: false,
      showStaffContent: false,
      showCustomerContent: false,
      userTypeData: {},
      id: "",
      accessLevel: "",
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
      const data = await UserTypeService.userTypeGetAll();
      let ACLs = {
        showCustomerContent: response.typeid === 3,
        showStaffContent: response.typeid === 2,
        showAdminContent: response.typeid === 1
      };
      this.setState({ ...ACLs, userTypeData: data, userData: response, isFetching: false });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  };

  componentDidMount() {
    const userType = AuthService.getCurrentUser();
    this.fetchDataAsync(userType);
  }

  handleTypeChange(e) {
    this.setState({
      type: e.target.value
    });
  }

  handleAccessLevelChange(e) {
    this.setState({
      accessLevel: e.target.value
    });
  }

  async handleIdChange(e) {
    try {
      this.setState({ ...this.state, isFetching: true });
      const response = await UserTypeService.userTypeGet(e.target.value);
      const data = {
        id: response.id,
        type: response.type,
        accessLevel: response.accessLevel
      }
      this.setState({ ...data, isFetching: false });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }

  }

  render() {
    let showStaffContent, showAdminContent = null;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/UserType", title: "User Types" },
      { link: null, title: "Get User Type" }
    ];
   
    showStaffContent = this.state.showStaffContent;
    showAdminContent = this.state.showAdminContent;

    return (
      <Container className="GetScreen">
        <BreadCrumbs parts={parts} />

        <Container className="Data">
          <Form
            ref={c => {
              this.form = c;
            }}
          >
            {(showStaffContent || showAdminContent) && (
              <React.Fragment>
                <Form.Group as={Row}>
                  <Col sm={4}>
                    <Form.Label htmlFor="userTypeId" sm={4}>User Type Id:</Form.Label>
                  </Col>
                  <Col sm={8}>
                    <span className="data">
                      <Form.Control
                        className="inputData"
                        as="select"
                        onChange={(e) => this.handleIdChange(e)}
                        value={this.state.id ? this.state.id : ''}
                      >
                        <React.Fragment>
                          {this.state.userTypeData.map(type => {
                            return (
                              <option value={type.id} key={type.id}>{type.id}</option>
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
              </React.Fragment>
            )}
          </Form>
        </Container>

      </Container>
    );
  }
}
export default UserTypeUpdate;