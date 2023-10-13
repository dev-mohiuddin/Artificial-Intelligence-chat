
import { Link } from "react-router-dom";
import { useState } from "react"
import { forgotPassword } from "../../api/user";
import { toastMessage } from "../../toast/toastMessage";

function ForgotPass() {

    const [email, setEmail] = useState("");

    const forgotPass = async (e) => {
        e.preventDefault()

        const data = await forgotPassword(email)

        toastMessage(data)
        setEmail("")
    }

    return (
        <div className='w-full bg-slate-50'>
            <div className='container h-screen flex flex-col gap-8 justify-center items-center'>
                <Link to="/">
                    <h1 className='text-xl hcol inline-block text-gray-700 cursor-pointer md:text-2xl md:font-bold '>Collaborative Dynamics</h1>
                </Link>
                <div className='w-[300px]  bg-white shadow-2xl shadow-blue-200 rounded-md px-4 py-8'>
                    <form onSubmit={forgotPass} className='flex flex-col gap-8' action="">
                        <div className='flex flex-col gap-2'>
                            <label className="text-base font-medium text-gray-700" htmlFor="">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='bg-transparent outline-0 h-10 w-full rounded-md border border-blue-500 px-3' type="email" name="email" placeholder='Enter you email' required />
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