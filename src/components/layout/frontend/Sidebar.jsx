import {AiOutlineHome, AiOutlineSetting} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'
import {PiUsersThreeThin} from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='fixed main-bg md:bg-none  min-w-full md:min-w-0 md:static bottom-0 h-14 md:h-[calc(100vh-56px)] md:py-4 border border-x-0 border-b-0 dark:border-t-gray-600 border-t-gray-400 md:border-0'>
        <div className='glass md:bg-transparent md:dark:bg-none min-h-full md:min-h-0 md:pb-0 flex mx-auto  items-center justify-center  md:flex-col gap-10 md:gap-5'>
          <Link to="/">
            <div className='flex flex-col items-center hover:cursor-pointer group'>
              <span className='text-2xl group-hover:text-blue-600 hcol'><AiOutlineHome /></span>
              <span className='group-hover:text-blue-600 text-sm hcol'>Home</span>
            </div>
          </Link>
          <Link to='/create'>
            <div className='flex flex-col items-center hover:cursor-pointer group'>
              <span className='text-[28px] group-hover:text-blue-600 hcol'>< BiPlus/></span>
              <span className='group-hover:text-blue-600 text-sm hcol'>Create</span>
            </div>
          </Link>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-[28px] group-hover:text-blue-600 hcol'>< PiUsersThreeThin/></span>
            <span className='group-hover:text-blue-600 text-sm hcol'>Community</span>
          </div>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-2xl group-hover:text-blue-600 hcol'>< AiOutlineSetting/></span>
            <span className='group-hover:text-blue-600 text-sm hcol'>Settings</span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar