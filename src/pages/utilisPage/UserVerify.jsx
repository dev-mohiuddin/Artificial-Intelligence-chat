

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"

function UserVerify() {

  const navigate = useNavigate()
  const user = useAuth()

  useEffect(()=>{
    user.status ? navigate("/") : ''
  },[user])

  return (
    <div className='w-full bg-slate-50'>
        <div className='container flex flex-col gap-4 h-screen justify-center items-center'>
          <div className="max-w-md mx-auto py-8 px-3 flex flex-col gap-4 justify-center items-center bg-slate-200 shadow rounded-md">
            <div>
              <h1 className="text-2xl font-bold">collaborativedynamics</h1>
            </div>
            <p>Processing</p>
          </div>
        </div>
    </div>
  )
}

export default UserVerify