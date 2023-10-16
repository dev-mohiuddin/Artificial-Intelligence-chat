

import darklogo from '../../assets/images/logo/darklogo.png'

function PublicHeader() {



  return (
    <div className='w-full bg-gray-900 dark:bg-slate-950 ' >
      <div className='container flex items-center justify-between h-12 md:h-16'>
        <div className=''>
          <img className='w-72 md:w-full md:h-11' src={darklogo} alt="logo" />
        </div>
        <div className=' hidden md:flex items-center gap-5'>
          <li className="list-none text-lg font-medium cursor-pointer text-slate-300">Service</li>
          <li className="list-none text-lg font-medium cursor-pointer text-slate-300">Plan</li>
          <button className='outline-0 py-1 px-3 font-medium bg-blue-500 text-white rounded-md hover:bg-blue-800 duration-300'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default PublicHeader