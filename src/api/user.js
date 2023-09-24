

import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/v1"

export const userCheck = async(checkUserData)=>{
    try {
        const {data} = await axios.post(`${BASE_URL}/user/validate`, {checkUserData})

        return data

    } catch (error) {
        console.log(error)
    }
}

export const signUpUser = async (signInData)=>{
    try {
        const {data} = await axios.post(`${BASE_URL}/user/create`, signInData ,{headers:{"Content-Type" : "application/json"}});
        return data
    } catch (error) {
        console.log(error)
    }
}

export const verifyUser = async(verifyData)=>{

    console.log(verifyData)
    try {
        const {data} = await axios.post(`${BASE_URL}/extra/mail/verify`, { "url": "920b3698-5edc-412f-b2f6-1281cf7e2096"})
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const userLogin = async(loginData)=>{
    try {
        
        const {data} = await axios.post(`${BASE_URL}/auth/login`, loginData, {headers:{"Content-Type" : "application/json"}})
        
        window.localStorage.setItem("userInfo", data.token.token )
        return data ;

    } catch (error) {
       return error.response.data
    }
}