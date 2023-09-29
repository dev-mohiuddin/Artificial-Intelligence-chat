

import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlinePlus, AiOutlineRobot, AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai'

function AdminSidebar() {

  const { pathname } = useLocation()

  return (
    <div className='w-56 bg-white h-[calc(100vh-48px)] shadow-xl'>
      <div className='py-4 flex flex-col gap-4'>

        <Link to='/admin' >
          <div className={`${pathname == '/admin' ? 'bg-blue-500' : ''} flex gap-2 items-center group cursor-pointer md:pl-8 pl-4 py-1.5`}>
            <span className={`${pathname == '/admin' ? "!text-slate-100 " : ""} text-gray-800 text-lg group-hover:text-blue-500 duration-300`}><AiOutlineHome /></span>
            <p className={`${pathname == '/admin' ? "!text-slate-100" : ""} text-base font-medium text-gray-800 group group-hover:text-blue-500 duration-300`}>Dashboard</p>
          </div>
        </Link>
        <Link to='/admin/create-prompt'>
          <div className={`${pathname == '/admin/create-prompt' ? 'bg-blue-500 text-slate-100' : ''} flex gap-2 items-center group cursor-pointer md:pl-8 pl-4 py-1.5`}>
            <span className={`${pathname == '/admin/create-prompt' ? "!text-slate-100 " : ""} text-gray-800 text-lg group-hover:text-blue-500 duration-300`}><AiOutlinePlus /></span>
            <p className={`${pathname == '/admin/create-prompt' ? "!text-slate-100" : ""} text-base font-medium text-gray-800 group group-hover:text-blue-500 duration-300`}>Create Prompt</p>
          </div>
        </Link>

        <Link to='/admin/all-prompts' >
          <div className={`${pathname == '/admin/all-prompts' ? 'bg-blue-500 text-slate-100' : ''} flex gap-2 items-center group cursor-pointer md:pl-8 pl-4 py-1.5`}>
            <span className={`${pathname == '/admin/all-prompts' ? "!text-slate-100 " : ""} text-gray-800 text-lg group-hover:text-blue-500 duration-300`}><AiOutlineRobot /></span>
            <p className={`${pathname == '/admin/all-prompts' ? "!text-slate-100" : ""} text-base font-medium text-gray-800 group group-hover:text-blue-500 duration-300`}>All Prompts</p>
          </div>
        </Link>

        <Link to='/admin/all-users'>
          <div className={`${pathname == '/admin/all-users' ? 'bg-blue-500 text-slate-100' : ''} flex gap-2 items-center group cursor-pointer md:pl-8 pl-4 py-1.5`}>
            <span className={`${pathname == '/admin/all-users' ? "!text-slate-100 " : ""} text-gray-800 text-lg group-hover:text-blue-500 duration-300`}><AiOutlineUserAdd /></span>
            <p className={`${pathname == '/admin/all-users' ? "!text-slate-100" : ""} text-base font-medium text-gray-800 group group-hover:text-blue-500 duration-300`}>All Users</p>
          </div>
        </Link>


      </div>
    </div>
  )
}

export default AdminSidebar