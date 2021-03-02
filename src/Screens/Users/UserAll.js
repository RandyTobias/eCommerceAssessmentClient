import React, { Component } from 'react';

import {
  Container,
} from 'react-bootstrap';

import AuthService from '../../Services/AuthService';
import AccessService from '../../Services/AccessService';
import UserService from '../../Services/UserService';
import UserTypeService from '../../Services/UserTypeService';
import UtilityService from '../../Services/UtilityService';

import BreadCrumbs from '../../Components/BreadCrumbs';
import DataTable from '../../Components/DataTable';

import '../../CSS/AllScreen.css';

class UserAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      userData: {},
      content: {},
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
        let content = await UserService.userGetAll();  
        let replaceKeys = {
          id:"ID", 
          fName: "First Name",
          lName: "Last name",
          email: "Email",
          typeid: "User Type" 
        };
        const userTypesArray = await UserTypeService.userTypeGetAll();
        let userTypes = {};
        userTypesArray.map( (el) => { return userTypes[el.id] = el.type;});
        content = UtilityService.changeObjectKeys(content, replaceKeys);
        content = UtilityService.changeObjectValues(content, "User Type", userTypes); 
        this.setState({ userData: response, content: content, isFetching: false });
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

  render() {
    const { showStaffContent, showAdminContent } = this.state;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/User", title: "Users" },
      { link: null, title: "All Users" }
    ];
    
    return (
      <Container className="AllScreen">
        <BreadCrumbs parts={parts} />

        <Container className="Data">
          
            {(showStaffContent || showAdminContent) && (
              <DataTable entity="User" adminContent={showAdminContent} data={this.state.content} />
              )}

            
        </Container>

      </Container>
    );
  }
}
export default UserAll;