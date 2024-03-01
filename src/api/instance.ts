import axios from "axios"

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_APP_API_ORIGIN,
  },
})

API.interceptors.request.use((config) => {
  return config
})

export default API
