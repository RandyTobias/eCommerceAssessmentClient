import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = "http://localhost:5000/Auth";

class AuthService {
  async login(email, password) {
    return await axios
      .post(API_URL + "/login", {
        email,
        password
      })
      .then(response => {
        if (response.data && response.data.data) {
          // console.log(response.data);
          // console.log(response.data.data);
          ;
          localStorage.setItem("user", response.data.data);
        }
        return response.data;
       

      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(email, password) {
    return await axios.post(API_URL + "/register", {
      email,
      password
    });
  }

  getCurrentUser() {
    let user = localStorage.getItem('user');
    let userData = null;
    try {
      userData = jwtDecode(user);
    }
    catch(ex){
      console.log(ex);
    } 
    return userData;
  }
}

export default new AuthService();