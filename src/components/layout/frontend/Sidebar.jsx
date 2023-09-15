import {AiOutlineHome, AiOutlineSetting} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'
import {PiUsersThreeThin} from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=' md:h-[calc(100vh-56px)] py-4'>
        <div className='flex items-center justify-center  md:flex-col gap-10 md:gap-5'>
          <Link to="/">
            <div className='flex flex-col items-center hover:cursor-pointer group'>
              <span className='text-2xl group-hover:text-blue-600 hcol'><AiOutlineHome /></span>
              <span className='group-hover:text-blue-600 text-sm hcol hcol'>Home</span>
            </div>
          </Link>
          <Link to='/create'>
            <div className='flex flex-col items-center hover:cursor-pointer group'>
              <span className='text-[28px] group-hover:text-blue-600 hcol'>< BiPlus/></span>
              <span className='group-hover:text-blue-600 text-sm hcol hcol'>Create</span>
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