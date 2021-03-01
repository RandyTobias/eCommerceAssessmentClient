import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/Transaction';

class TransactionService {
  async transactionGetAll() {
    return (await axios.get(API_URL + '/getall', { headers: authHeader() })).data.data;
  }

  async transactionGet(id) {
    return (await axios.get(API_URL + '/' + id, { headers: authHeader() })).data.data; 
  }

  async transactionDelete(id) {
    return (await axios.delete(API_URL + '/' + id, { headers: authHeader() })).data.data;
  }

  async transactionUpdate(transaction) {
    return (await axios.put(API_URL, transaction, { headers: authHeader() })).data.data;
  }

  async transactionAdd(transaction) {
    return (await axios.post(API_URL, transaction, { headers: authHeader() })).data.data;
  }

}

export default new TransactionService();