import axios from 'axios';

const api = axios.create({ 
    baseURL: 'https://rocketseat-nod.herokuapp.com/api',
});

export default api;

