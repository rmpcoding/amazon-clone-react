import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-f7b9a/us-central1/api' 
    //API url (cloud function)
});

export default instance;