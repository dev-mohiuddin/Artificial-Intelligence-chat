
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { toastMessage } from "../../toast/toastMessage"
import { verifyUser } from "../../api/user"

function UserVerifyComplete() {

    const navigate = useNavigate()
    const {url} = useParams()

    useEffect(()=>{
        getRes(url)
    },[url])

    const getRes = async(d)=>{
        const data = await verifyUser(d)
        if(data.status === true){
            const toast = {
                status : true,
                message : "User successfully verified. Please Login"
            }
            toastMessage(toast);
        }else{
            toastMessage(data);
        }
        data.status? navigate("/home") : "";
    }

  return (
    <div className='w-full bg-slate-100'>
        <div className='container h-screen flex justify-center items-center'>
            <h1 className='text-5xl font-bold'>Verifying</h1>
        </div>
    </div>
  )
}

export default UserVerifyComplete