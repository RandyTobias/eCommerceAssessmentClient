import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import AuthService from '../Services/AuthService';

import '../CSS/TopNavBar.css';

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;
    // console.log("Current User: ");
    // console.log(currentUser);
    return (
      <div className="TopNavBar">
        {currentUser ? (
          <nav>
            <ul>
              <li id="NavHome">
                <NavLink
                  exact to="/"
                  activeClassName="selected">
                  Home
                </NavLink>
              </li>
              <li id="NavRegistration">
                <NavLink
                  to="/LogIn"
                  activeClassName="selected"
                  onClick={this.logOut}>
                  Log Out
                </NavLink>
              </li>
            </ul>
          </nav>
        ) : (
            <nav>

              <ul>
                <li id="NavHome">
                  <NavLink
                    exact to="/"
                    activeClassName="selected">
                    Home
                  </NavLink>
                </li>
                <li id="NavRegistration">
                  <NavLink
                    to="/Registration"
                    activeClassName="Selected">
                    Register
                  </NavLink>
                </li>
                <li id="NavLogIn">
                  <NavLink
                    to="/LogIn"
                    activeClassName="selected">
                    Log In
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
      </div>
    )
  }
}
export default TopNavBar;