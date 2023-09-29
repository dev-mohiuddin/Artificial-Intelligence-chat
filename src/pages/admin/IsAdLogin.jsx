
import { Navigate, Outlet } from "react-router-dom"
import useAdminAuth from "../../Hooks/useAdminAuth"

function IsAdLogin() {

  const authAdmin = useAdminAuth()
  const admin = authAdmin.status ;

  return ( admin ? <Outlet data="data" ><h1>Log in success</h1> </Outlet> : <Navigate to="/home" /> )
}

export default IsAdLogin