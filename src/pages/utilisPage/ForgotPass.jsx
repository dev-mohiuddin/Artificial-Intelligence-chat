
import { Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import lightlogo from '../../assets/images/logo/lightlogo.png'
import { forgotPassword } from "../../api/user";
import { toastMessage } from "../../toast/toastMessage";

function ForgotPass() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");

    const forgotPass = async (e) => {
        e.preventDefault()

        const data = await forgotPassword(email)

        toastMessage(data)
        setEmail("")
    }

    return (
        <div className='w-full bg-slate-50'>
            <div className='container relative h-screen flex flex-col gap-8 justify-center items-center'>
                <span onClick={() => navigate(-1)} title='Back' className='flex gap-2 text-lg items-center  cursor-pointer'><MdOutlineArrowBackIosNew size={16} />Back</span>
                <Link to="/">
                    <img className=' dark:hidden w-72 md:w-full md:h-9' src={lightlogo} alt="logo" />
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