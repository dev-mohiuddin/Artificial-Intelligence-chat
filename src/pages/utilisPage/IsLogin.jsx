
import  {Navigate, Outlet} from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

function IsLogin() {
  
  const user = useAuth()
  const auth = user.status;

  return ( auth ? <Outlet data="data">user true</Outlet> : <Navigate to="/home" />)
}

export default IsLogin