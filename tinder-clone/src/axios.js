import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:2029"
})

export default instance;