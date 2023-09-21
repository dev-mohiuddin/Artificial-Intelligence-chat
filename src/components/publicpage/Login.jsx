
import { RxCross2 } from "react-icons/rx"

function Login({setLoginForm, setSignUpForm}) {

    const toggleForm = ()=>{
        setLoginForm(false)
        setSignUpForm(true)
    }

  return (
    <div className=' absolute bg-black/20 w-full h-screen flex items-center justify-center'>
        <div className='relative w-80 py-8 rounded-md cardcol shadow-2xl border border-gray-400 dark:border-gray-600 p-5 flex flex-col gap-3 justify-center'>
            <span onClick={()=> setLoginForm(false)} className="absolute top-2 right-2 hcol cursor-pointer"><RxCross2 size={22} /></span>
            <form className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-base hcol' htmlFor="">Email</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800' type="text" placeholder='Email' name="" required/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base hcol' htmlFor="">Password</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800' type="password" placeholder='Password' name="" required />
                </div>
                <input className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md w-20 text-base font-medium text-white' type="submit" value="Login" />
            </form>
            <div className='flex gap-2'>
                <p className='text-xs pcol'>Don't have an account.</p>
                <p onClick={toggleForm} className='text-xs cursor-pointer text-blue-500 font-medium'>Sign up</p>
            </div>
        </div>

    </div>
  )
}

export default Login