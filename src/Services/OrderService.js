import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/Order';

class OrderService {
  async orderGetAll() {
    return (await axios.get(API_URL + '/getall', { headers: authHeader() })).data.data;
  }

  async orderGet(id) {
    return (await axios.get(API_URL + '/' + id, { headers: authHeader() })).data.data; 
  }

  async orderDelete(id) {
    return (await axios.delete(API_URL + '/' + id, { headers: authHeader() })).data.data;
  }

  async orderUpdate(order) {
    return (await axios.put(API_URL, order, { headers: authHeader() })).data.data;
  }

  async orderAdd(order) {
    return (await axios.post(API_URL, order, { headers: authHeader() })).data.data;
  }

}

export default new OrderService();