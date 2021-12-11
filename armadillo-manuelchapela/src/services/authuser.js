import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'

export async function register(data) {
    try {
        const response = axios({
            url: `${baseUrl}/user/register`,
            method: 'POST',
            data
        })
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function login(data) {
    try {
        const response = axios({
            url: `${baseUrl}/user/login`,
            method: 'POST',
            data
        })
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getUsers() {
    try {
        const response = axios({
            url: `${baseUrl}/users`,
            method: 'GET',
        })
        return response;
    } catch (error) {
        return error.response;
    }
}