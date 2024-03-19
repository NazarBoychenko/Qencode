import axios from 'axios';

const mainInstance = axios.create({
    baseURL: 'https://auth-qa.qencode.com/v1/auth',
});

export default mainInstance;