import axios from "axios";

const baseUrl = "http://localhost:3001/cart"

const getItem = () => {
    const request = axios.get(`${baseUrl}`)
    return request.then(response => response.data)
}

const setItem = (item) => {
    const request = axios.post(`${baseUrl}`, item)
    return request.then(response => response.data)
}

const update = (id, qty) => {
    const request = axios.patch(`${baseUrl}/${id}`, {quantity:qty})
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const check = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {getItem, setItem, update, remove, check}