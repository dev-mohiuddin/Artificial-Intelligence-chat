import {FiSearch} from 'react-icons/fi'
import {BsMoonStars} from 'react-icons/bs'
import {TbSettingsDollar} from 'react-icons/tb'

function Header() {
  return (
    <div className='w-full fixed'>
      <div className="container h-12 border border-x-0 border-t-0 border-b-gray-400 flex items-center justify-between">
        <div className=''>
              <h1 className='text-2xl font-bold '>Ai-assistant</h1>
          </div>
          <div className="flex gap-5">
            <div className='relative flex items-center'>
              <input className='h-7 outline-none px-3 w-60 rounded-md bg-purple-100' type="text" name="" id="" />
              <span className='text-xl absolute right-2 cursor-pointer'><FiSearch /></span>
            </div>
            <div className='flex items-center'>
              <span className='cursor-pointer'><BsMoonStars size={17}/></span>
            </div>
            <div className='bg-yellow-100 px-2 cursor-pointer rounded-md'>
              <span className='flex items-center gap-1'>Upgrade <TbSettingsDollar size={15}/></span>
            </div>
            <div className="flex gap-5">
              <span className='bg-blue-500 px-2 rounded-md cursor-pointer text-white'>Log in</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header