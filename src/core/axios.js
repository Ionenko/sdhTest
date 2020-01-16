import axios from 'axios';

axios.defaults.baseURL = 'http://frontend-candidate.dev.sdh.com.ua/v1';
axios.defaults.headers = {
    'Content-Type': 'application/json'
};

export default axios;