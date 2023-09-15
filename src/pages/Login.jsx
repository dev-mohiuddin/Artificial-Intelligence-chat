import { Link } from "react-router-dom"

function Login() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-80 py-8 rounded-md bg-gradient-to-b from-slate-200 via-purple-200 to-purple-100 shadow p-5 flex flex-col gap-3 justify-center'>
            <form className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-base font-medium' htmlFor="">Email</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-purple-100' type="text" placeholder='Email' name="" required/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base font-medium' htmlFor="">Password</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-purple-100' type="password" placeholder='Password' name="" required />
                </div>
                <input className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md w-20 text-base font-medium text-white' type="submit" value="Login" />
            </form>
            <div className='flex gap-2'>
                <p className='text-xs font-medium'>Don't have an account.</p>
                <Link to="/sign-up">
                    <p className='text-xs underline text-blue-500 font-medium'>Sign up</p>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Login