import axios from 'axios';
import { apiSettings } from '../admin';

export async function getWelcome () {
    return axios.get(apiSettings().apiURL + "/welcome").then(response => response.data)
}
