import axios from 'axios'

 export const axiosInstance= axios.create({
    baseURL: 'http://localhost:8080/app/v1', 
    headers:{
        credentials:"include",
        method:"POST",
        "Content-Type": "application/json",
        Authorization:`bearer ${localStorage.getItem("tokenForBms") || ""}`
            },
})

