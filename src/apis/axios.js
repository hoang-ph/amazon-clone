import axios from 'axios';

// Change the baseURL to the cloud function from firebase after deploy the functions folder, firebase deloy --only functions
const instance = axios.create({
  baseURL: 'http://localhost:5001/challenge-f565e/us-central1/api',
});

export default instance;
