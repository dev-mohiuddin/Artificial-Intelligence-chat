

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

export const signUpUser = async(signInData)=>{

    try {
        const {data} = await axios.post(`${BASE_URL}/user/create`, {signInData},
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}