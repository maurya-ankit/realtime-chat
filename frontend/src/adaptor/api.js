import axios from 'axios'
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json'
    },
})
api.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('user'))?.token
        if (token) {
            config.headers['Authorization'] = `Token ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)
export default api