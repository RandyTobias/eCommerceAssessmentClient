import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/Product';

class ProductService {
  async productGetAll() {
    return (await axios.get(API_URL + '/getall', { headers: authHeader() })).data.data;
  }

  async productGet(id) {
    return (await axios.get(API_URL + '/' + id, { headers: authHeader() })).data.data; 
  }

  async productDelete(id) {
    return (await axios.delete(API_URL + '/' + id, { headers: authHeader() })).data.data;
  }

  async productUpdate(product) {
    return (await axios.put(API_URL, product, { headers: authHeader() })).data.data;
  }

  async productAdd(product) {
    return (await axios.post(API_URL, product, { headers: authHeader() })).data.data;
  }

}

export default new ProductService();