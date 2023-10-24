
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userLogin } from "../../api/user"
import { toastMessage } from "../../toast/toastMessage";

function Login({ setSignUpModal, setLoginModal }) {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const toggleModal = () => {
        setLoginModal(false)
        setSignUpModal(true)
    }

    const inputHandel = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const data = await userLogin(user)
            setLoading(false)
            toastMessage(data)
            if( data.user_verifed == false ){
                const email = data.user_data.email;
                navigate("/re-verify", { state: {email} })
            }
            if (data.status === true && data.role === "admin") {
                window.location.replace("/admin");
            } else if (data.status === true && data.role === "user") {
                // navigate("/", {replace : true})
                window.location.replace("/");
            }
            setUser({
                username: "",
                password: "",
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='md:w-4/5 w-full bg-gray-400/10 md:py-8 rounded-md shadow-2xl p-5 flex flex-col gap-3'>
            <form onSubmit={login} className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Username</label>
                    <input onChange={inputHandel} value={user.username} className='outline-none px-2 py-1 rounded-md bg-transparent placeholder:text-white border border-gray-600 text-white' type="text" placeholder='username' name="username" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base text-white' htmlFor="">Password</label>
                    <input onChange={inputHandel} value={user.password} className='outline-none px-2 py-1 rounded-md bg-transparent border border-gray-600  placeholder:text-white text-white ' type="password" placeholder='Password' name="password" required />
                </div>
                <input className='cursor-pointer px-3 py-1 bg-blue-500 rounded-md w-20 text-base font-medium text-white' disabled={loading} type="submit" value={ loading ? "loading..." : "Log in" } />
            </form>
            <div className='flex gap-2'>
                <p className='text-xs text-gray-200'>Forgot.</p>
                <Link to="/forgot-password">
                    <p className='text-xs hover:underline text-red-300 hover:text-red-400 cursor-pointer duration-300'>Password</p>
                </Link>
            </div>
            <div className='flex gap-2 -mt-2'>
                <p className='text-xs text-white'>Don't have an account.</p>
                <p onClick={toggleModal} className='text-sm underline cursor-pointer text-blue-500 font-medium'>Sign up</p>
            </div>
        </div>
    )
}

export default Login