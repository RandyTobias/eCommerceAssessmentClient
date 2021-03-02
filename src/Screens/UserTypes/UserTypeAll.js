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

class UserTypeAll extends Component {
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
      if (user) {
        const response = await UserService.userGet(user.nameid);
        let content = await UserTypeService.userTypeGetAll();     
        let replaceKeys = {
          id:"ID", 
          type: "User Type",
          accessLevel: "Access level",
        };
        content = UtilityService.changeObjectKeys(content, replaceKeys);
        this.setState({ userData: response, content: content, isFetching: false });
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

  render() {
    let showStaffContent, showAdminContent = null;

    const parts = [
      { link: "/", title: "Home" },
      { link: "/UserType", title: "User Types" },
      { link: null, title: "All Users Types" }
    ];
    
    showStaffContent = this.state.showStaffContent;
    showAdminContent = this.state.showAdminContent;
    return (
      <Container className="AllScreen">
        <BreadCrumbs parts={parts} />

        <Container className="Data">
          
            {(showStaffContent || showAdminContent) && (
              <DataTable entity="UserType" adminContent={showAdminContent} data={this.state.content} />
              )}

            
        </Container>

      </Container>
    );
  }
}
export default UserTypeAll;