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

import '../../CSS/UpdateScreen.css';

class UserTypeCreate extends Component {
  constructor(props) {
    super(props);
    this.handleAccessLevelChange = this.handleAccessLevelChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);

    this.state = {
      isFetching: false,
      userData: {},
      accessLevel: "",
      type: "",
      loading: false,
    };

    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
  }

  async fetchDataAsync(user) {
    try {
      if (user){
        this.setState({ ...this.state, isFetching: true });
        const response = await UserService.userGet(user.nameid);
        this.setState({ userData: response, isFetching: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  };

  async componentDidMount() {
    try{
      const ACLs = await AccessService.getAccessLevels();
      this.setState({...this.state, ...ACLs});
      
      await this.fetchDataAsync(this.user);
    }
    catch(e){
      console.log(e);
    }
  }

  handleAccessLevelChange(e) {
    this.setState({
      accessLevel: e.target.value
    });
  }

  handleTypeChange(e) {
    this.setState({
      type: e.target.value
    });
  }

  handleCreate(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    let payload = {
      type: this.state.type,
      accessLevel: parseInt(this.state.accessLevel),
    };

    UserTypeService.userTypeAdd(payload).then(
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
    const parts = [
      { link: "/", title: "Home" },
      { link: "/UserType", title: "User Types" },
      { link: null, title: "Create User Type" }
    ];
  
    return (
      <Container className="CreateScreen">
        <BreadCrumbs parts={parts} />

        <Container className="Data">
          <Form
            onSubmit={(e) => this.handleCreate(e)}
            ref={c => {
              this.form = c;
            }}
          >

            <Form.Group as={Row}>
              <Form.Label column htmlFor="accessLevel" sm={4}>Access Level:</Form.Label>
              <Col sm={8}>
                <span className="data">
                  <Form.Control
                    className="inputData"
                    type="number"
                    placeholder="Access Level"
                    onChange={(e) => this.handleAccessLevelChange(e)}
                    value={this.state.accessLevel ? this.state.accessLevel : ''}
                  />
                </span>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column htmlFor="type" sm={4}>User Type:</Form.Label>
              <Col sm={8}>
                <span className="data">
                  <Form.Control
                    className="inputData"
                    type="text"
                    placeholder="User Type"
                    onChange={(e) => this.handleTypeChange(e)}
                    value={this.state.type ? this.state.type : ''}
                  />
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
export default UserTypeCreate;