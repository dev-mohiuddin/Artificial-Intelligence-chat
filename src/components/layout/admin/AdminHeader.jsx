

import { FaBarsStaggered } from 'react-icons/fa6'
import { BsSearch, BsChevronDown } from 'react-icons/bs'

import messi from '../../../assets/images/characterimg/messi.png'
import useAdminAuth from '../../../Hooks/useAdminAuth'

function AdminHeader() {

  const adminUser = useAdminAuth()


  return (
    <div className='w-full bg-blue-500'>
      <div className='container h-12 flex justify-between items-center'>
        <div className='flex items-center gap-8'>
          <h1 className='text-xl font-bold uppercase text-gray-100 cursor-pointer'>Character.ai</h1>
          <span className='text-lg text-gray-100 cursor-pointer'><FaBarsStaggered /></span>
          <span className='text-lg text-gray-50 cursor-pointer'><BsSearch /></span>
        </div>
        <div className='flex items-center gap-3 cursor-pointer'>
          <div className='h-8 w-8 rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover hover:scale-105 duration-300' src={messi} alt="img" />
          </div>
          <div className='flex gap-1 items-center'>
            <h3 className='text-base font-medium text-slate-100'>{adminUser.name}</h3>
            <span className='text-gray-100'><BsChevronDown /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader