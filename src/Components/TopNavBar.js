import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import '../CSS/TopNavBar.css';

class TopNavBar extends Component {
  render() {
    return (
      <div className="TopNavBar">
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
                activeClassName="selected">
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
      </div>
    )
  }
}
export default TopNavBar;