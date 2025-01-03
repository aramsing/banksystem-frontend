import axios from 'axios'

export const bsServer = axios.create({
    baseURL: "http://ec2-3-12-74-107.us-east-2.compute.amazonaws.com:8080",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})