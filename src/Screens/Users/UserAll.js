import React, { Component } from 'react';

import {
  Container,
} from 'react-bootstrap';

import AuthService from '../../Services/AuthService';
import UserService from '../../Services/UserService';
import UserTypeService from '../../Services/UserTypeService';

import BreadCrumbs from '../../Components/BreadCrumbs';
import DataTable from '../../Components/DataTable';

import '../../CSS/AllScreen.css';

class UserAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      currentUser: undefined,
      userData: {},
      content: {},
      showAdminContent: false,
      showStaffContent: false,
      showCustomerContent: false,
      loading: false,
    };

    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
  }

  async fetchDataAsync(user) {
    try {
      this.setState({ ...this.state, isFetching: true });
      const response = await UserService.userGet(user.nameid);
      let content = await UserService.userGetAll();
      let ACLs = {
        showCustomerContent: response.typeid === 3,
        showStaffContent: response.typeid === 2,
        showAdminContent: response.typeid === 1
      };      
      let replaceKeys = {
        id:"ID", 
        fName: "First Name",
        lName: "Last name",
        email: "Email",
        typeid: "User Type" 
      };
      // const userTypes = { 1: "Administrator", 2: "Staff", 3: "Customer" };
      const userTypesArray = await UserTypeService.userTypeGetAll();
      let userTypes = {};
      userTypesArray.map( (el) => { return userTypes[el.id] = el.type;});
      content = this.changeObjectKeys(content, replaceKeys);
      content = this.changeObjectValues(content, "User Type", userTypes); 
      this.setState({ ...ACLs, userData: response, content: content, isFetching: false });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  };

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    this.fetchDataAsync(user);
  }

  changeObjectKeys = (arr, replaceKeys) => {
    return arr.map(item => {
      const newItem = {};
      Object.keys(item).forEach(key => {
        newItem[replaceKeys[key]] = item[[key]];
      });
      return newItem;
    });
  };

  changeObjectValues = (arr, targetKey, replaceValues) => {
    return arr.map(item => {
      const newItem = {};
      Object.keys(item).forEach(key => {
        if (key === targetKey){
          newItem[key] = replaceValues[item[key]];
        }
        else {
          newItem[key] = item[key];
        }
      });
      return newItem;
    });
  };

  render() {
    let showStaffContent, showAdminContent = null;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/User", title: "Users" },
      { link: null, title: "All Users" }
    ];
    
    showStaffContent = this.state.showStaffContent;
    showAdminContent = this.state.showAdminContent;
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