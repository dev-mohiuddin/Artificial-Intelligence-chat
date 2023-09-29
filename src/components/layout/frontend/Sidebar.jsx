

import { useNavigate } from 'react-router-dom'
import { AiOutlineHome, AiOutlineUser,AiOutlineLogout } from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'
import { PiUsersThreeThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate()

  const logOut = ()=>{
    window.localStorage.clear("userInfo")
    navigate("/home")
  }

  return (
    <div className='fixed md:bg-none md:pl-6 min-w-full md:min-w-0 md:static bottom-0 h-14 md:h-[calc(100vh-56px)] z-50 md:py-4 md:flex md:flex-col md:justify-between'>
      <div className='bg-slate-50 dark:bg-slate-900 md:bg-transparent md:dark:bg-transparent  min-h-full md:min-h-0 md:pb-0 flex mx-auto  items-center justify-center  md:flex-col gap-10 md:gap-5'>
        <Link to="/">
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-2xl group-hover:text-blue-600 duration-300 hcol'><AiOutlineHome /></span>
            <span className='group-hover:text-blue-600 duration-300 text-sm hcol'>Home</span>
          </div>
        </Link>
        <Link to='/create'>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-[28px] group-hover:text-blue-600 duration-300 hcol'>< BiPlus /></span>
            <span className='group-hover:text-blue-600 duration-300 text-sm hcol'>Create</span>
          </div>
        </Link>
        <Link to='/'>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-[28px] group-hover:text-blue-600 duration-300 hcol'>< PiUsersThreeThin /></span>
            <span className='group-hover:text-blue-600 duration-300 text-sm hcol'>Community</span>
          </div>
        </Link>
        <Link to='/account'>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-2xl group-hover:text-blue-600 duration-300 hcol'>< AiOutlineUser /></span>
            <span className='group-hover:text-blue-600 duration-300 text-sm hcol'>Account</span>
          </div>
        </Link>
      </div>
      <div className='inline-block cursor-pointer'>
        <span onClick={logOut} title='Log Out' className='text-2xl hover:text-red-500 duration-300 hcol'>< AiOutlineLogout /></span>
      </div>
    </div>
  )
}

export default Sidebar