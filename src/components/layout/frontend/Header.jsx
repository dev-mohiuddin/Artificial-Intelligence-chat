import {FiSearch} from 'react-icons/fi'
import {BsMoonStars} from 'react-icons/bs'
import {TbSettingsDollar} from 'react-icons/tb'
import { Link  } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full fixed'>
      <div className="container h-12 border border-x-0 border-t-0 border-b-gray-400 flex items-center justify-between">
          <div className='w-full'>
            <Link to="/">
              <h1 className='text-xl md:text-2xl md:font-bold '>Ai-assistant</h1>
            </Link>
          </div>
          <div className="flex w-full gap-5">
            <div className='relative flex flex-1 items-center'>
              <input className='py-1 outline-none px-3 flex-1 rounded-md bg-purple-100 shadow' type="text" name="" id="" />
              <span className='text-xl absolute right-2 hcol cursor-pointer'><FiSearch /></span>
            </div>
            <div className='md:flex gap-5 hidden items-center'>
              <div className='flex items-center'>
                <span className='cursor-pointer hcol'><BsMoonStars size={17}/></span>
              </div>
              <div className='bg-yellow-100 px-2 py-1 flex items-center cursor-pointer rounded-md'>
                <span className='flex items-center hcol gap-1'>Upgrade <TbSettingsDollar size={15}/></span>
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