

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../Hooks/useAuth"
import { verifyUser } from "../api/user"

function UserVerify() {

  const navigate = useNavigate()
  const user = useAuth()

  useEffect(()=>{
    user.status ? navigate("/") : ''
  },[user])

  const verify = async()=>{
    const data = await verifyUser({
      url: "920b3698-5edc-412f-b2f6-1281cf7e2096"
    })
    console.log("data", data)
  }

  return (
    <div className='w-full bg-slate-50'>
        <div className='container flex flex-col gap-4 h-screen justify-center items-center'>
          <div className="max-w-md mx-auto py-8 px-3 flex flex-col gap-4 justify-center items-center bg-slate-200 shadow rounded-md">
            <div>
              <h1 className="text-2xl hcol font-bold">collaborativedynamics</h1>
            </div>
            <p>Verify your account</p>
            <p className="text-sm font-normal text-blue-500">Click on the Button and check your mail.</p>
            <button onClick={verify} className='px-4 py-1 text-lg font-medium bg-blue-500 rounded-md text-white hover:bg-blue-700 duration-300 outline-0'>Verify</button>
          </div>
        </div>
    </div>
  )
}

export default UserVerify