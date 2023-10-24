
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import { reVerify } from "../../api/user";
import { toastMessage } from "../../toast/toastMessage";

function ReVerify() {

  const { state } = useLocation();
  const email = state?.email;
  
  useEffect(()=>{
    const verify = async()=>{
      const data = await reVerify({email: email});
      toastMessage(data)
    }
    verify()
  },[email])
  
  return (
    <div className='w-full bg-slate-50'>
        <div className='container flex flex-col gap-10 h-screen justify-center items-center'>
          <Link to="/">
            <h1 className='text-xl hcol inline-block text-gray-700 cursor-pointer md:text-2xl md:font-bold '>Collaborative Dynamics</h1>
          </Link>
          <div className="max-w-md mx-auto py-8 px-4 flex flex-col gap-4  bg-white shadow-2xl shadow-blue-200 rounded-md">
              <h1 className="text-xl font-bold text-gray-700">Hey User,</h1>
              <p className="text-base text-gray-700">Wowwee! Thanks for registering an account with Discord! You're the coolest Persion in all the land (and i've met a lot of really cool people).</p>
              <p className="text-base text-gray-700">We have sent the verification url to your {state.email} </p>
              <span className="text-white px-4 py-2 rounded bg-blue-500 font-semibold text-center">Please Check your email</span>
          </div>
        </div>
    </div>
  )
}

export default ReVerify