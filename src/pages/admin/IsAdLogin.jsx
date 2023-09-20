
import { Navigate, Outlet } from "react-router-dom"

function IsAdLogin() {

    const admin = true

  return ( admin ? <Outlet data="data" ><h1>Log in success</h1> </Outlet> : <Navigate to="/admin/login" /> )
}

export default IsAdLogin