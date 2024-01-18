import axios from "axios";

const apiSupplier = axios.create({
    baseURL: 'http://localhost:3000/'


})

export default apiSupplier