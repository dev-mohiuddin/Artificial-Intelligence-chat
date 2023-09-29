

import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/v1"

export const promptCreate = async(promptData)=>{
    try {
        const {data} = await axios.post(`${BASE_URL}/character-prompt/create`, promptData)

        return data

    } catch (error) {   
        return error.response.data 
    }
}