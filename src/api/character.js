

import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/v1"
const token = localStorage.getItem("userInfo")

export const createCharacter = async (characterData) => {
    try {
        const { data } = await axios.post(`${BASE_URL}//character/create`, characterData, {
            headers: {
                'Authorization': `${token}`
            }
        })

        return data

    } catch (error) {
        return error.response.data
    }
}