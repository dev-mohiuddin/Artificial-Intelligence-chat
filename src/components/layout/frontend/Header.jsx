import {FiSearch} from 'react-icons/fi'
import {BsMoonStars} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
import {TbSettingsDollar} from 'react-icons/tb'
import { Link  } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full glass md:bg-transparent dark:md:bg-none fixed z-50'>
      <div className="container h-12 md:border md:border-x-0 md:border-t-0 border-b-gray-400 dark:border-b-gray-600 flex items-center justify-between">
          <div className='w-48'>
            <Link to="/">
              <h1 className='text-xl hcol inline-block cursor-pointer md:text-2xl md:font-bold '>Ai-assistant</h1>
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-2 md:gap-5">
            <div className='relative flex items-center'>
              <input className='h-8 outline-none px-3 w-48 md:w-72 rounded-full md:rounded-md border bg-slate-100 border-gray-400 dark:border-gray-600 focus:border-blue-300 pcol dark:bg-gray-900' type="text" name="" id="" />
              <span className='text-xl absolute right-0 bg-slate-100 dark:bg-gray-900 h-full w-9 border border-gray-400 dark:border-gray-600 flex justify-center items-center rounded-r-full md:rounded-r-md overflow-hidden hcol cursor-pointer'><FiSearch /></span>
            </div>
            <div className='flex items-center md:hidden'>
                <span className='hcol'><BiMenu size={25} /></span>
            </div>
            <div className='md:flex gap-5 hidden items-center'>
              <div className='flex items-center'>
                <span className='cursor-pointer hcol'><BsMoonStars size={17}/></span>
              </div>
              <div className='bg-yellow-100 px-2 py-1 flex items-center cursor-pointer rounded-md'>
                <span className='flex items-center hcol dark:text-black gap-1'>Upgrade <TbSettingsDollar size={15}/></span>
              </div>
              <div className="flex gap-5 items-center">
                <Link to="/login">
                  <span className='bg-blue-500 hcol px-2 py-1 rounded-md cursor-pointer text-white'>Log in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header