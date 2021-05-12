import axios from 'axios';

const instance = axios.create({
    //API url (cloud function)
    baseURL: 'https://us-central1-clone-f7b9a.cloudfunctions.net/api'
    // Test locally using URL below
    // 'http://localhost:5001/clone-f7b9a/us-central1/api' 
});

export default instance;