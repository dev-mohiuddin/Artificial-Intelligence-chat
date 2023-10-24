

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

export const trendCharacter = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/api/v1/character/trending`, {
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

export const categoryCharacter = async (ctgId) => {
    try {

        const { data } = await axios.get(`${baseUrl}/api/v1/character/cat/${ctgId}`, {
            headers: {
                'Authorization': `${token}`
            }
        })

        return data

    } catch (error) {
        return error.response.data
    }
}

export const deleteCharacter = async (charId) => {
    try {
        const { data } = await axios.delete(`${baseUrl}/api/v1/character/delete/${charId}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return data
    } catch (error) {

        return error.response.data
    }
}

export const searchCharacter = async (userName) => {
    try {
        const { data } = await axios.get(`${baseUrl}/api/v1/character/search/${userName}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return data
    } catch (error) {
        return error.response.data
    }
}
export const checkCharacterUsername = async (userName) => {
    try {
        if (userName) {
            const { data } = await axios.get(`${baseUrl}/api/v1/character/username/check/${userName}`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            return data
        } else {

        }

    } catch (error) {
        // console.log(error)
    }
}