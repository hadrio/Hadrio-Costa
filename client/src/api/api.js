import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const Api = axios.create({
    baseURL:'http://localhost:3001'
});
export default Api;
