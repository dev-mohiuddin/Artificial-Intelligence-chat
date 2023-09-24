
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { toastMessage } from "../../toast/toastMessage"
import { updatePassword } from "../../api/user"

function PasswordUpdate() {

    const {url} = useParams()
    const [data, setData] = useState({
        url : "",
        password : ""
    })

    const inputHandel = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        setData({
            ...data,
            url : url,
        })
    },[url])
    console.log(data)
    const updatePass = async(e)=>{
        e.preventDefault()

        const res = await updatePassword(data)
        toastMessage(res)

    }

    return (
        <div className='w-full bg-slate-100'>
            <div className='container h-screen flex justify-center items-center'>
                <div className='w-[300px] bg-slate-200 rounded-md px-3 py-5'>
                    <form onSubmit={updatePass} className='flex flex-col gap-3' action="">
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Password</label>
                            <input onChange={inputHandel} value={data.password} className='bg-transparent outline-0 h-10 w-full rounded-md border border-blue-500 px-3' type="password" name="password" placeholder='New password' required />
                        </div>
                        <div className='flex'>
                            <input type="submit" className='h-10 w-full text-lg font-semibold text-white rounded-md cursor-pointer bg-blue-500' value="Reset Password" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordUpdate