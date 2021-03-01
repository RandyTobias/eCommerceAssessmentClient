import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/User';

class UserService {
  async userGetAll() {
    return (await axios.get(API_URL + '/getall', { headers: authHeader() })).data.data;
  }

  async userGet(id) {
    return (await axios.get(API_URL + '/' + id, { headers: authHeader() })).data.data; 
  }

  async userDelete(id) {
    return (await axios.delete(API_URL + '/' + id, { headers: authHeader() })).data.data;
  }

  async userUpdate(user) {
    return (await axios.put(API_URL, user, { headers: authHeader() })).data.data;
  }

  async userAdd(user) {
    return (await axios.post(API_URL, user, { headers: authHeader() })).data.data;
  }

}

export default new UserService();