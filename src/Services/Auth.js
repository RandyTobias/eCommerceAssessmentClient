import jwtDecode from 'jwt-decode';

class Auth {
  user = null;
  token = "";
  onUserChange = (newUser) => console.log(newUser)
  constructor() {
    this.decodeToken();
    window.addEventListener("storage", (e) => e.key === 'token' && this.decodeToken());
  }

  userChanged() {
    this.onUserChange(this.getUser());
  }

  setToken(token) {
    localStorage.setItem("token", token);
    this.decodeToken();
    this.userChanged();
  }

  decodeToken() {
    try {
      this.token = localStorage.getItem("token") || "";
      this.user = jwtDecode(this.token);
      this.userChanged();
    } catch (e) {
      this.logout();
    }
  }

  logout() {
    this.user = null;
    this.token = "";
    localStorage.setItem("token", "");
    this.userChanged();
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    return this.user && (new Date().getTime() < this.user.exp);
  }
  getUser() {
    return this.user;
  }
}

export default Auth;