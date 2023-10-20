

import axios from 'axios'
import { baseUrl } from './lib/helper'

const token = window.localStorage.getItem("userInfo")

export const userCheck = async (checkUserData) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/user/validate`, { checkUserData })

        return data

    } catch (error) {
        return error.response.data
    }
}

export const signUpUser = async (signInData) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/user/create`, signInData, { headers: { "Content-Type": "application/json" } });
        return data
    } catch (error) {
        return error.response.data
    }
}

export const verifyUser = async (verifyData) => {

    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/extra/mail/verify`, { url: verifyData }, { headers: { "Content-Type": "application/json" } })

        return data
    } catch (error) {
        return error.response.data
    }
}

export const reVerify = async (verifyEmail) => {
    try {

        const { data } = await axios.post(`${baseUrl}/api/v1/extra//verify/mail/send`, verifyEmail, { headers: { "Content-Type": "application/json" } })
        return data
    } catch (error) {
        return error.response.data
    }
}

export const userLogin = async (loginData) => {
    try {

        const { data } = await axios.post(`${baseUrl}/api/v1/auth/login`, loginData, { headers: { "Content-Type": "application/json" } })

        if (data.status && data.user_verifed) {
            localStorage.setItem("userInfo", data.token.token)
        }
        return data;

    } catch (error) {
        return error.response.data;
    }
}

export const forgotPassword = async (emailData) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/extra/forget/password/request`, { email: emailData })

        return data
    } catch (error) {
        return error.response.data
    }
}

export const updatePassword = async (passData) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/extra/forget/password/update`, passData)

        return data
    } catch (error) {
        return error.response.data
    }
}


export const allUsers = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/api/v1/user/all`, {
            headers: {
                'Authorization': `${token}`
            }
        })

        return data
    } catch (error) {
        return error.response.data
    }
}

export const userProfile = async (photo) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/user/profile-photo`, photo, {
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        return data
    } catch (error) {
        return error.response.data
    }
}