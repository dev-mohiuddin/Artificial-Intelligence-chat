
import { Link } from "react-router-dom"
import {RxCross2} from 'react-icons/rx'

function AdminLogin() {
    return (
        <div className='h-screen bg-slate-50 dark:bg-slate-950'>
            <div className='container h-full flex justify-center items-center'>
                <div className='relative w-80 py-5 rounded-md card-col shadow-2xl border border-gray-400 dark:border-gray-600 p-5 flex flex-col gap-3 justify-center'>
                    <Link to='/'>
                        <span className="hcol absolute top-2 right-2 cursor-pointer"><RxCross2 size={20}/></span>
                    </Link>
                    <h3 className="hcol text-center text-xl font-semibold">Admin Login</h3>
                    <form className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-base hcol' htmlFor="">Email</label>
                            <input className='outline-none px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800' type="text" placeholder='Email' name="" required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-base hcol' htmlFor="">Password</label>
                            <input className='outline-none px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800' type="password" placeholder='Password' name="" required />
                        </div>
                        <input className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md w-20 text-base font-medium text-white' type="submit" value="Login" />
                        <div className='flex gap-2'>
                            <p className='text-xs pcol'>Forgot</p>
                            <Link to="/admin">
                                <p className='text-xs underline text-blue-500 font-medium'>Password?</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin