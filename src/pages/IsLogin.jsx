
import  {Navigate, Outlet} from 'react-router-dom'

function IsLogin() {

    const user = true;

  return (user? <Outlet data="data">user true</Outlet> : <Navigate to="login" />)
}

export default IsLogin