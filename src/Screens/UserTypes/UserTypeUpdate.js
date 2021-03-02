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

class UserTypeUpdate extends Component {
  constructor(props) {
    super(props);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleAccessLevelChange = this.handleAccessLevelChange.bind(this);

    this.state = {
      isFetching: false,
      userData: {},
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
      if (user){ 
        const response = await UserService.userGet(user.nameid);
        const data = await UserTypeService.userTypeGetAll();
        
        this.setState({ ...this.state, userTypeData: data, userData: response, isFetching: false });
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

  handleUpdate(e) {
    e.preventDefault();

    this.setState({
      loading: true
    });

    let payload = {
      id: parseInt(this.state.id),
      type: this.state.type,
      accessLevel: parseInt(this.state.accessLevel),
    };

    UserTypeService.userTypeUpdate(payload).then(
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
    let {showStaffContent, showAdminContent} = this.state;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/UserType", title: "User Types" },
      { link: null, title: "Update User Type" }
    ];
    console.log("UserType Data: ");
    console.log(this.state.userTypeData);

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
              <React.Fragment>
                <Form.Group as={Row}>
                  <Form.Label column htmlFor="userTypeId" sm={4}>User Type Id:</Form.Label>
                  <Col sm={8}>
                    <span className="data">
                      <Form.Control
                        className="inputData"
                        as="select"
                        onChange={(e) => this.handleIdChange(e)}
                        value={this.state.id ? this.state.id : ''}
                      >
                        <React.Fragment>
                          {
                            (
                              this.state.userTypeData && 
                              Object.keys(this.state.userTypeData).length !== 0
                            ) ? this.state.userTypeData.map(type => {
                            return (
                              <option value={type.id} key={type.id}>{type.id}</option>
                            );
                          }) : ''}
                        </React.Fragment>
                      </Form.Control>
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column htmlFor="accessLevel" sm={4}>Access Level:</Form.Label>
                  <Col sm={8}>
                    <span className="data">
                      <Form.Control
                        className="inputData"
                        type="text"
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
                    <span>Save Changes</span>
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
export default UserTypeUpdate;