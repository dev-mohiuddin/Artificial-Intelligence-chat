import React from 'react'

function Login({setSignUpModal, setLoginModal}) {

    const toggleModal = ()=>{
        setLoginModal(false)
        setSignUpModal(true)
    }

    return (
        <div className='md:w-4/5 w-full bg-gray-400/10 py-8 rounded-md shadow-2xl p-5 flex flex-col gap-3'>
            <form className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Email</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-transparent placeholder:text-white border border-gray-600 text-white' type="text" placeholder='Email' name="" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Password</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-transparent border border-gray-600  placeholder:text-white text-white ' type="password" placeholder='Password' name="" required />
                </div>
                <input className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md w-20 text-base font-medium text-white' type="submit" value="Login" />
            </form>
            <div className='flex gap-2'>
                <p className='text-xs text-white'>Don't have an account.</p>
                <p onClick={toggleModal} className='text-sm underline cursor-pointer text-blue-500 font-medium'>Sign up</p>
            </div>
        </div>
    )
}

export default Login