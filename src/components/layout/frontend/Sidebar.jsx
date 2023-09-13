import {AiOutlineHome, AiOutlineSetting} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'
import {PiUsersThreeThin} from 'react-icons/pi'

function Sidebar() {
  return (
    <div className='h-[calc(100vh-56px)] py-4'>
        <div className='flex items-center flex-col gap-5'>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-2xl group-hover:text-blue-600 text-gray-800'><AiOutlineHome /></span>
            <span className='group-hover:text-blue-600 text-sm font-medium'>Home</span>
          </div>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-[28px] group-hover:text-blue-600 text-gray-800'>< BiPlus/></span>
            <span className='group-hover:text-blue-600 text-sm font-medium'>Create</span>
          </div>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-[28px] group-hover:text-blue-600 text-gray-800'>< PiUsersThreeThin/></span>
            <span className='group-hover:text-blue-600 text-sm font-medium'>Community</span>
          </div>
          <div className='flex flex-col items-center hover:cursor-pointer group'>
            <span className='text-2xl group-hover:text-blue-600 text-gray-800'>< AiOutlineSetting/></span>
            <span className='group-hover:text-blue-600 text-sm font-medium'>Settings</span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar