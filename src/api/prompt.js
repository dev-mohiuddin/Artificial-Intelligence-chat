    

import axios from 'axios'

import { baseUrl } from './lib/helper'

const token = window.localStorage.getItem("userInfo")

export const promptCreate = async (promptData) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/character-prompt/create`, promptData, {
            headers: {
                'Authorization': `${token}`
            }
        })

        return data

    } catch (error) {
        return error.response.data
    }
}


export const allPrompts = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/api/v1/character-prompt/all-prompt`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return data;

    } catch (error) {
        return error.response.data;
    }
}

export const promptDelete = async (id) => {
    try {
        const { data } = await axios.delete(`${baseUrl}/api/v1/character-prompt/delete/${id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return data

    } catch (error) {
        return error.response.data;
    }
}