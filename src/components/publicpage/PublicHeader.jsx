
import { useState } from "react"

import Login from "./Login"
import SignUp from './SignUp'

function PublicHeader() {

    const [loginForm, setLoginForm] = useState(false)
    const [signUpForm, setSignUpForm] = useState(false)

  return (
    <div className='w-full fixed bg-white dark:bg-slate-950 border ' >
        {loginForm && <Login setLoginForm={setLoginForm} setSignUpForm={setSignUpForm} />}
        {signUpForm && <SignUp setLoginForm={setLoginForm} setSignUpForm={setSignUpForm} />}
        <div className='container flex items-center justify-between h-16'>
            <div className=''>
                <h2 className='text-2xl font-bold hcol'>CollaborativeDynamics</h2>
            </div>
            <div className='flex items-center gap-5'>
                <button onClick={()=> setSignUpForm(true)} className='outline-0 py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-800 duration-300'>Sing UP</button>
                <button onClick={()=> setLoginForm(true)} className='outline-0 py-1 px-3 bg-gray-600 text-white rounded-md hover:bg-gray-800 duration-300 '>Login</button>
            </div>
        </div>
    </div>
  )
}

export default PublicHeader