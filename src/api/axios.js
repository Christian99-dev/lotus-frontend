import axios from 'axios';
import { apiSettings } from '../admin';

export async function getWilkommen () {
    return axios.get(apiSettings().apiURL + "/welcome").then(response => response.data)
}

export async function getArbeit () {
    return axios.get(apiSettings().apiURL + "/arbeit").then(response => response.data)
}

export async function getHead () {
    return axios.get(apiSettings().apiURL + "/head").then(response => response.data)
}

export async function getKontakt () {
    return axios.get(apiSettings().apiURL + "/kontakt").then(response => response.data)
}

export async function getLeistungen () {
    return axios.get(apiSettings().apiURL + "/leistungen").then(response => response.data)
}

export async function getRezensionen () {
    return axios.get(apiSettings().apiURL + "/rezensionen").then(response => response.data)
}

export async function getTeam () {
    return axios.get(apiSettings().apiURL + "/team").then(response => response.data)
}

export async function getUnternehmen () {
    return axios.get(apiSettings().apiURL + "/unternehmens-informationen").then(response => response.data)
}

export async function getAGB () {
    return axios.get(apiSettings().apiURL + "/agb").then(response => response.data)
}

export async function getImpressum () {
    return axios.get(apiSettings().apiURL + "/impressum").then(response => response.data)
}

export async function getFooter () {
    return axios.get(apiSettings().apiURL + "/footer").then(response => response.data)
}




