import { RxCross2 } from 'react-icons/rx'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { TbSettingsDollar } from 'react-icons/tb'
import { PiUserSwitch } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'
import useAuth from '../../../Hooks/useAuth'


function MobileMenu({ setMobileMenu, dark, setDark }) {

  const user = useAuth()

  const navigate = useNavigate()

  const logOut = () => {
    window.localStorage.clear("userInfo")
    navigate("/home")
  }

  const removeDark = () => {
    console.log("hello")
    setDark('dark')
    localStorage.setItem("themes", "dark")
  }

  const addDark = () => {
    console.log("hello")
    setDark('')
    localStorage.setItem("themes", "")

  }

  return (
    <div className=' md:hidden absolute top-0 left-0 h-screen flex justify-end w-full bg-black/50'>
      <div className='relative w-4/5 h-full bg-slate-100 dark:bg-slate-900 right-0'>
        <span onClick={() => setMobileMenu(false)} className='absolute top-3 right-3 cursor-pointer hcol'><RxCross2 size={25} /></span>
        <div className='flex flex-col gap-4 mt-12 px-4'>
          <div className='relative flex items-center '>
            <input className='h-8 outline-none px-3 w-full md:w-72 rounded-full md:rounded-md border bg-slate-100 border-gray-400 dark:border-gray-600 focus:border-blue-300 pcol dark:bg-gray-900' type="text" placeholder='Search character by username' name="" id="" />
            <span className='text-xl absolute right-0 bg-slate-100 dark:bg-gray-900 h-full w-9 border border-gray-400 dark:border-gray-600 flex justify-center items-center rounded-r-full md:rounded-r-md overflow-hidden hcol cursor-pointer'><FiSearch /></span>
          </div>
          <Link onClick={() => setMobileMenu(false)} to='/plan'>
            <div className=' py-1 flex items-center cursor-pointer rounded-md'>
              <span className='flex items-center hcol gap-2'><TbSettingsDollar size={22} />Premium</span>
            </div>
          </Link>
          {
            user.role === "admin" ? <Link to="/admin">
              <span className='hcol cursor-pointer flex items-center gap-2'><PiUserSwitch size={22} />Switch to admin</span>
            </Link> : ""
          }
          <div className='flex items-center'>
            <span onClick={removeDark} className={`${dark ? 'hidden' : ''} cursor-pointer hcol flex items-center gap-2`}><BsMoonStars size={20} />Dark mood</span>
            <span onClick={addDark} className={`${!dark ? 'hidden' : ''} cursor-pointer hcol flex items-center gap-2`}><BsSun size={20} />Light mood</span>
          </div>
          <div className='inline-block cursor-pointer'>
            <span onClick={logOut} title='Log Out' className='hcol flex gap-2 items-center hover:text-red-500 duration-300 hcol'>< AiOutlineLogout size={22} />Logout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu