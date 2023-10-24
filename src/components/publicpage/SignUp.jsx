
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { toastMessage } from "../../toast/toastMessage"
import { signUpUser } from "../../api/user"
import { signUpFromValidation } from '../../api/lib/fromValidation'


function SignUp({ setLoginModal, setSignUpModal }) {

    const navigate = useNavigate();

    const toggleModal = () => {
        setSignUpModal(false)
        setLoginModal(true)
    }
    const [error, setError] = useState([])
    const defaultVaule = {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const [user, setUser] = useState(defaultVaule)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const error = signUpFromValidation(user)
        setError(error)
    }, [user])

    const inputHandel = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // create user

    console.log(error)


    const createUser = async (e) => {
        e.preventDefault()
        try {
            if (error.length === 0) {
                console.log("hello")
                setLoading(true)
                const data = await signUpUser(user)
                toastMessage(data)
                setLoading(false)
                setUser(defaultVaule)
                data.status ? navigate("/verify") : '';
            } else {
                console.log("notok")
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='md:w-4/5 w-full bg-gray-400/10 py-8 rounded-md shadow-2xl p-5 flex flex-col gap-3'>
            <form onSubmit={createUser} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Name</label>
                    <div className="flex flex-col gap-1">
                        <input onChange={inputHandel} value={user.name} className='outline-none px-2 py-1 rounded-md bg-transparent border border-gray-600 placeholder:text-white text-white' type="text" placeholder='Name' name="name" required />
                        {/* <span className="text-xs text-red-500 ml-1">{error[0]?.name}</span> */}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Username</label>
                    <div className="flex flex-col gap-1">
                        <input onChange={inputHandel} value={user.username} className='outline-none px-2 py-1 rounded-md bg-transparent border placeholder:text-white text-white border-gray-600' type="text" placeholder='Username' name="username" required />
                        <span className="text-xs text-red-500 ml-1">{error[0]?.username}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Email</label>
                    <div className="flex flex-col gap-1">
                        <input onChange={inputHandel} value={user.email} className='outline-none px-2 py-1 rounded-md bg-transparent border placeholder:text-white text-white border-gray-600' type="email" placeholder='Email' name="email" required />
                        <span className="text-xs text-red-500 ml-1">{error[0]?.email}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Password</label>
                    <div className="flex flex-col gap-1">
                        <input onChange={inputHandel} value={user.password} className='outline-none px-2 py-1 rounded-md bg-transparent border border-gray-600 placeholder:text-white text-white ' type="password" placeholder='Password' name="password" required />
                        <span className="text-xs text-red-500 ml-1">{error[0]?.password}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Confirm password</label>
                    <div className="flex flex-col gap-1">
                        <input onChange={inputHandel} value={user.confirmPassword} className='outline-none px-2 py-1 rounded-md bg-transparent border border-gray-600 placeholder:text-white text-white ' type="password" placeholder='Password' name="confirmPassword" required />
                        <span className="text-xs text-red-500 ml-1">{error[0]?.confirmPassword}</span>
                    </div>
                </div>
                <input className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md w-20 text-base font-medium text-white' disabled={loading} type="submit" value={loading ? "Loading..." : " Sign Up"} />
            </form>
            <div className='flex gap-2'>
                <p className='text-xs text-white'>Have an account.</p>
                <p onClick={toggleModal} className='text-sm underline cursor-pointer text-blue-500 font-medium'>Login</p>
            </div>
        </div>
    )
}

export default SignUp