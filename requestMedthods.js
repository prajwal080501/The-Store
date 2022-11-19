import axios from 'axios';
export const userRequest = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
        token: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        
    }
  });