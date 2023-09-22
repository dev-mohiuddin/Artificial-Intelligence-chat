

import { useEffect, useState } from "react"

import { userCheck, signUpUser } from "../../api/user"


function SignUp({ setLoginModal, setSignUpModal }) {

    const toggleModal = () => {
        setSignUpModal(false)
        setLoginModal(true)
    }

    const [userAlert, setUserAlert] = useState(null)
    const [emailAlert, setEmailAlert] = useState(null)
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    // check user

    const checkUserInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(user.username.length > 3) {
            async function getCheck(user) {
                const data = await userCheck(user)
                setUserAlert(data.username)
            }
            getCheck(user)
        }
        if(user.email.length > 3) {
            async function getCheck(user) {
                const data = await userCheck(user)
                setEmailAlert(data.email)
            }
            getCheck(user)
        }
        if(user.username.length == 0){
            setUserAlert(null)
        }
        if(user.email.length == 0){
            setEmailAlert(null)
        }
    }, [user,])

    // create user

    const createUser = async(e)=>{
        e.preventDefault()
        const data = await signUpUser(user)
        console.log(data)
    }

    return (
        <div className='md:w-4/5 w-full bg-gray-400/10 py-8 rounded-md shadow-2xl p-5 flex flex-col gap-3'>
            <form onSubmit={createUser} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Name</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-transparent border border-gray-600 placeholder:text-white text-white' type="text" placeholder='Name' name="name" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Username</label>
                    <div className="flex flex-col gap-1">
                        <input onChange={checkUserInput} className='outline-none px-2 py-1 rounded-md bg-transparent border placeholder:text-white text-white border-gray-600' type="text" placeholder='Username' name="username" required />
                        {userAlert === 0 && <span className="text-xs text-green-600">Username is avilable.</span>}
                        {userAlert === 1 && <span className="text-xs text-red-500">Username is already taken.</span>}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Email</label>
                    <div className="flex flex-col gap-2">
                        <input onChange={checkUserInput} className='outline-none px-2 py-1 rounded-md bg-transparent border placeholder:text-white text-white border-gray-600' type="email" placeholder='Email' name="email" required />
                        {emailAlert === 1 && <span className="text-xs text-red-500">Email is already use.</span>}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Password</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-transparent border border-gray-600 placeholder:text-white text-white ' type="password" placeholder='Password' name="password" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Confirm password</label>
                    <input className='outline-none px-2 py-1 rounded-md bg-transparent border border-gray-600 placeholder:text-white text-white ' type="password" placeholder='Password' name="confirmPassword" required />
                </div>
                <input className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md w-20 text-base font-medium text-white' type="submit" value="Sign Up" />
            </form>
            <div className='flex gap-2'>
                <p className='text-xs text-white'>Have an account.</p>
                <p onClick={toggleModal} className='text-sm underline cursor-pointer text-blue-500 font-medium'>Login</p>
            </div>
        </div>
    )
}

export default SignUp