

import { useState } from "react"
import { forgotPassword } from "../../api/user";
import { toastMessage } from "../../toast/toastMessage";

function ForgotPass() {

    const [email, setEmail] = useState("");

    const forgotPass = async(e)=>{
        e.preventDefault()

        const data = await forgotPassword(email)
        toastMessage(data)
        setEmail("")
    }

  return (
    <div className='w-full bg-slate-100'>
        <div className='container h-screen flex justify-center items-center'>
            <div className='w-[300px] bg-slate-200 rounded-md px-3 py-5'>
                <form onSubmit={forgotPass} className='flex flex-col gap-3' action="">
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email</label>
                        <input onChange={(e)=> setEmail(e.target.value)} value={email} className='bg-transparent outline-0 h-10 w-full rounded-md border border-blue-500 px-3' type="email" name="email" placeholder='Enter you email' required />
                    </div>
                    <div className='flex'>
                        <input type="submit" className='h-10 w-full text-lg font-semibold text-white rounded-md cursor-pointer bg-blue-500' value="Forgot Password" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPass