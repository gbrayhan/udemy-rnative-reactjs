import axios from 'axios'

export const reqResInApi = axios.create({
    baseURL: "https://reqres.in/api",
})