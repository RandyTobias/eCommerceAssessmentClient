import React from 'react';
import Auth from '../Services/Auth';

const UserContext = React.createContext('user')
const AuthContext = React.createContext('userService')
class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.userService = props.service || new Auth();
    this.userService.onUserChange = (newUser) => this.setUser(newUser);
    this.state = { user: this.userService.getUser() }
  }
  setUser = (newUser) => {
    this.setState(({ user }) => ({
      user: newUser,
    }))
  }
  render() {
    return (
      <AuthContext.Provider value={this.userService}>
        <UserContext.Provider value={this.state.user}>
        {this.props.children}
        </UserContext.Provider>
      </AuthContext.Provider>
    )
  }
}
// only doing this to shield end-users from the
// implementation detail of "context"
const AuthConsumer = AuthContext.Consumer;
const UserConsumer = UserContext.Consumer;

function AuthAndUserConsumer({ children }) {
  return (
    <AuthConsumer>
      {auth => (
        <UserConsumer>
          {user => children({ auth, user })}
        </UserConsumer>
      )}
    </AuthConsumer>
  )
}
export { AuthAndUserConsumer, UserConsumer, AuthProvider};