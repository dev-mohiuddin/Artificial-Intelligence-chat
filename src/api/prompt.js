

import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/v1"
const token = localStorage.getItem("userInfo")

export const promptCreate = async (promptData) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/character-prompt/create`, promptData, {
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
        const { data } = await axios.get(`${BASE_URL}/character-prompt/all-prompt`, {
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
        const { data } = await axios.delete(`${BASE_URL}/character-prompt/delete/${id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return data

    } catch (error) {
        return error.response.data;
    }
}