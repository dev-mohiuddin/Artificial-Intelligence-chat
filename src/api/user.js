

import axios from 'axios'


const BASE_URL = "http://localhost:3000/api/v1"

export const userCheck = async(checkUserData)=>{
    try {
        const {data} = await axios.post(`${BASE_URL}/user/validate`, {checkUserData})

        return data

    } catch (error) {
        return error.response.data 
    }
}

export const signUpUser = async (signInData)=>{
    try {
        const {data} = await axios.post(`${BASE_URL}/user/create`, signInData ,{headers:{"Content-Type" : "application/json"}});
        return data
    } catch (error) {
        return error.response.data
    }
}

export const verifyUser = async(verifyData)=>{

    try {
        const {data} = await axios.post(`${BASE_URL}/extra/mail/verify`, {url : verifyData}, {headers:{"Content-Type" : "application/json"}})

        return data
    } catch (error) {
        return error.response.data
    }
}

export const userLogin = async(loginData)=>{
    try {
        
        const {data} = await axios.post(`${BASE_URL}/auth/login`, loginData, {headers:{"Content-Type" : "application/json"}})
        
        if(data.status){
            localStorage.setItem("userInfo", data.token.token )
        }
        return data ;

    } catch (error) {
       return error.response.data;
    }
}

export const forgotPassword = async(emailData)=>{
    try {
        const {data} = await axios.post(`${BASE_URL}/extra/forget/password/request`,{email: emailData} )

        return data
    } catch (error) {
        return error.response.data
    }
}

export const updatePassword = async(passData)=>{
    try {
        const {data} = await axios.post(`${BASE_URL}/extra/forget/password/update`, passData)

        return data
    } catch (error) {
        return error.response.data
    }
}