import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/ShippingProvider';

class ShippingProviderService {
  async shippingProviderGetAll() {
    return (await axios.get(API_URL + '/getall', { headers: authHeader() })).data.data;
  }

  async shippingProviderGet(id) {
    return (await axios.get(API_URL + '/' + id, { headers: authHeader() })).data.data; 
  }

  async shippingProviderDelete(id) {
    return (await axios.delete(API_URL + '/' + id, { headers: authHeader() })).data.data;
  }

  async shippingProviderUpdate(shippingProvider) {
    return (await axios.put(API_URL, shippingProvider, { headers: authHeader() })).data.data;
  }

  async shippingProviderAdd(shippingProvider) {
    return (await axios.post(API_URL, shippingProvider, { headers: authHeader() })).data.data;
  }

}

export default new ShippingProviderService();