import axios from 'axios';
const secured = axios.create({
  baseURL: 'http://localhost:3001/api'
});

export default secured;