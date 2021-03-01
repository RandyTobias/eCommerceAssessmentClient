import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/Address';

class AddressService {
  async addressGetAll() {
    return (await axios.get(API_URL + '/getall', { headers: authHeader() })).data.data;
  }

  async addressGet(id) {
    return (await axios.get(API_URL + '/' + id, { headers: authHeader() })).data.data; 
  }

  async addressDelete(id) {
    return (await axios.delete(API_URL + '/' + id, { headers: authHeader() })).data.data;
  }

  async addressUpdate(address) {
    return (await axios.put(API_URL, address, { headers: authHeader() })).data.data;
  }

  async addressAdd(address) {
    return (await axios.post(API_URL, address, { headers: authHeader() })).data.data;
  }

}

export default new AddressService();