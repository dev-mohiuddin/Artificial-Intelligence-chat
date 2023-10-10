import { FiSearch } from 'react-icons/fi'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import { TbSettingsDollar } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import messi from '../../../assets/images/characterimg/messi.png'
import useAuth from '../../../Hooks/useAuth'
import MobileMenu from './MobileMenu'

function Header({ dark, setDark }) {


  const [mobileMenu, setMobileMenu] = useState(false);

  const user = useAuth();

  return (
    <div className='w-full glass bg-slate-50 md:bg-transparent dark:md:bg-none fixed z-50'>
      <div className="container h-12 md:border md:border-x-0 md:border-t-0 border-b-gray-400 dark:border-b-gray-600 flex items-center justify-between">
        <div className='w-72'>
          <Link to="/">
            <h1 className='text-xl hcol inline-block cursor-pointer md:text-2xl md:font-bold '>Collaborative Dynamics</h1>
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-2 md:gap-5">
          <div className='relative flex items-center'>
            <input className='h-8 outline-none px-3 w-48 md:w-72 rounded-full md:rounded-md border bg-slate-100 border-gray-400 dark:border-gray-600 focus:border-blue-300 pcol dark:bg-gray-900' type="text" name="" id="" />
            <span className='text-xl absolute right-0 bg-slate-100 dark:bg-gray-900 h-full w-9 border border-gray-400 dark:border-gray-600 flex justify-center items-center rounded-r-full md:rounded-r-md overflow-hidden hcol cursor-pointer'><FiSearch /></span>
          </div>
          <div className='flex items-center md:hidden'>
            <span onClick={() => setMobileMenu(true)} className='hcol'><BiMenu size={25} /></span>
          </div>
          {
            mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />
          }
          <div className='md:flex gap-5 hidden items-center'>
            <div className='flex items-center'>
              <span onClick={() => { setDark(true) }} className={`${dark ? 'hidden' : ''} cursor-pointer hcol`}><BsMoonStars size={17} /></span>
              <span onClick={() => { setDark(false) }} className={`${!dark ? 'hidden' : ''} cursor-pointer hcol`}><BsSun size={17} /></span>
            </div>
            <Link to='/plan'>
              <div className='bg-yellow-100 hover:bg-yellow-200 duration-200 px-2 py-1 flex items-center cursor-pointer rounded-md'>
                <span className='flex items-center hcol dark:text-black gap-1'>Premium<TbSettingsDollar size={15} /></span>
              </div>
            </Link>
            <div className="flex gap-5 items-center">
              <Link title={user.name} className='overflow-hidden h-8 w-8 rounded-full' to="/account">
                <img className='object-cover h-full w-full hover:scale-105 duration-300' src={messi} alt="avater" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
