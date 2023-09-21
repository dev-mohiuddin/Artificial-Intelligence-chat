
import { RxCross2 } from "react-icons/rx"

function SignUp({setSignUpForm, setLoginForm}) {

    const toggleForm = ()=>{
        setSignUpForm(false)
        setLoginForm(true)
    }

  return (
    <div className='absolute bg-black/20 w-full h-screen flex items-center justify-center'>
        <div className='relative w-80 py-8 rounded-md cardcol shadow-2xl border border-gray-400 dark:border-gray-600 dark:bg-slate-900 p-5 flex flex-col gap-3 justify-center'>
            <span onClick={()=> setSignUpForm(false)} className="absolute top-2 right-2 hcol cursor-pointer"><RxCross2 size={22} /></span>
            <form className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-base hcol' htmlFor="">Name</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800 pcol' type="text" placeholder='Name' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base hcol' htmlFor="">Email</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800 pcol' type="email" placeholder='Email' name="" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base hcol' htmlFor="">Password</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800 pcol' type="password" placeholder='Password' name="" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base hcol' htmlFor="">Confirm password</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800 pcol' type="password" placeholder='confirm password' name="" required />
                </div>
                <input className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md w-20 text-base font-medium text-white' type="submit" value="Sign Up" />
            </form>
            <div className='flex gap-2'>
                <p className='text-xs pcol'>Have an account</p>
                <p onClick={toggleForm} className='text-xs underline cursor-pointer text-blue-500 font-medium'>Log in</p>
            </div>
        </div>

    </div>
  )
}

export default SignUp