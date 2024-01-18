import axios from "axios";

const apiSupplier = axios.create({
    baseURL: 'http://stingray-app-v3sq7.ondigitalocean.app/'


})

export default apiSupplier