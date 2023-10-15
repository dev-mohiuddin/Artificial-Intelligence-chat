

import axios from 'axios'

import { baseUrl } from './lib/helper'
const token = localStorage.getItem("userInfo")

export const createCharacter = async (characterData) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/character/create`, characterData, {
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })

        return data

    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export const allCharacter = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/api/v1/character/all-character`, {
            headers: {
                'Authorization': `${token}`
            }
        })

        return data

    } catch (error) {
        return error.response.data;
    }
}

export const singleCharacter = async (id) => {

    try {
        const { data } = await axios.get(`${baseUrl}/api/v1/character/single/${id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return data;

    } catch (error) {
        return error.response.data;
    }
}

export const characterReplay = async (userInput) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/bot/reply`, userInput, {
            headers: {
                'Authorization': `${token}`
            }
        })

        return data
    } catch (error) {
        return error.response.data
    }
}

export const myCharacters = async (userId) => {
    try {

        const { data } = await axios.get(`${baseUrl}/api/v1/character/my-character/${userId}`, {
            headers: {
                'Authorization': `${token}`
            }
        })

        return data

    } catch (error) {
        return error.response.data
    }
}