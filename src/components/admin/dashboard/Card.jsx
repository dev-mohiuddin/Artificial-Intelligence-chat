

import {TfiReload, TfiWallet} from 'react-icons/tfi'

function Card() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4'>

        <div className='flex flex-col gap-5 shadow-md p-5 bg-blue-400 rounded-md'>
            <h1 className='text-lg font-medium text-white'>Revenue</h1>
            <div className='flex justify-between items-center'>
                <span className='text-3xl text-white'><TfiReload /></span>
                <h1 className='text-3xl font-bold text-white'>$9343</h1>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-bass text-white' >This Month</p>
                <p className='text-base text-white'>$1400</p>
            </div>
        </div>

        <div className='flex flex-col gap-5 shadow-md p-5 bg-orange-400 rounded-md'>
            <h1 className='text-lg font-medium text-white'>Revenue</h1>
            <div className='flex justify-between items-center'>
                <span className='text-3xl text-white'><TfiReload /></span>
                <h1 className='text-3xl font-bold text-white'>$9343</h1>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-base text-white' >This Month</p>
                <p className='text-base text-white'>$1400</p>
            </div>
        </div>

        <div className='flex flex-col gap-5 shadow-md p-5 bg-green-400 rounded-md'>
            <h1 className='text-lg font-medium text-white'>Revenue</h1>
            <div className='flex justify-between items-center'>
                <span className='text-3xl text-white'><TfiReload /></span>
                <h1 className='text-3xl font-bold text-white'>$9343</h1>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-base text-white' >This Month</p>
                <p className='text-base text-white'>$1400</p>
            </div>
        </div>

        <div className='flex flex-col gap-5 shadow-md p-5 bg-pink-400 rounded-md'>
            <h1 className='text-lg font-medium text-white'>Revenue</h1>
            <div className='flex justify-between items-center'>
                <span className='text-3xl text-white'><TfiReload /></span>
                <h1 className='text-3xl font-bold text-white'>$9343</h1>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-base text-white' >This Month</p>
                <p className='text-base text-white'>$1400</p>
            </div>
        </div>

    </div>
  )
}

export default Card