import axios from "axios";

const baseUrl = "https://fakestoreapi.com"
const categUrl = "https://fakestoreapi.com/products/category"
const getAll = () => {
    const request = axios.get(`${baseUrl}/products`);
    return request.then(response => response.data)
}

const single = (id) => {
    const request = axios.get(`${baseUrl}/products/${id}`)
    return request.then(response => response.data)
}

const category = (name) => {
    const request = axios.get(`${categUrl}/${name}`)
    return request.then(response => response.data)
}

export default {getAll, single, category}