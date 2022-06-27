import axios from 'axios';

export const Api = axios.create({
    baseURL:'http://localhost:3001'
});

export const createSession = async (username, password) => {
    return Api.post('/',{username, password})
}
