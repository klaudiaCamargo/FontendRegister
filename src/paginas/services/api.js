import axios from 'axios';
const api = axios.create({
    baseURL : 'http://localhost:5433'
});

export default api;