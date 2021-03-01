import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/UserType';

class UserTypeService {
  async userTypeGetAll() {
    return (await axios.get(API_URL + '/getall', { headers: authHeader() })).data.data;
  }

  async userTypeGet(id) {
    return (await axios.get(API_URL + '/' + id, { headers: authHeader() })).data.data; 
  }

  async userTypeDelete(id) {
    return (await axios.delete(API_URL + '/' + id, { headers: authHeader() })).data.data;
  }

  async userTypeUpdate(userType) {
    return (await axios.put(API_URL, userType, { headers: authHeader() })).data.data;
  }

  async userTypeAdd(userType) {
    return (await axios.post(API_URL, userType, { headers: authHeader() })).data.data;
  }

}

export default new UserTypeService();