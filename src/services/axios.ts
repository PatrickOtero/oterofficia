import axios from "axios"

const formsubmitUrlApi = "https://formsubmit.co/ajax/"
const serverUrl = "https://oterofficia-backend-api.cyclic.app"

export const api = axios.create({ 
    baseURL: serverUrl,
});

export const formsubmitApi = axios.create({ 
    baseURL: formsubmitUrlApi,
});

// export const apiAuth = axios.create({
//     baseURL: serverUrl,
// })

// apiAuth.interceptors.request.use((config) => {
//     const storageToken = localStorage.getItem("Token");
//     const token = storageToken?.slice(1, storageToken.length-1)

//     if(token?.length) {
//         if(config.headers)
//         {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//     }

//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });