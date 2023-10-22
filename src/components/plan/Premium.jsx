


import {FiArrowRightCircle} from 'react-icons/fi'
import { Link } from "react-router-dom"
import { comming } from '../../api/lib/helper'


function Premium() {
    return (
    <div className=' relative px-4 md:px-6 py-6 flex flex-col gap-2 w-full md:w-[300px] border md:scale-110 rounded-xl dark:bg-slate-900 dark:shadow-black dark:border-gray-600 bg-slate-100 md:shadow-2xl shadow-blue-300'>
            <div className='flex flex-col justify-between h-80'>
                <div className=''>
                    <h3 className='text-xl text-center hcol font-semibold'>Premium </h3>
                    <h3 className='hcol text-center'>Collaborative Dynamics</h3>
                    <p className='pcol text-center mt-3 text-base md:text-sm'>Access to the latest AI models including ChatGPT 4.0 32k, deep contextual AI, and more. Recommended for enthusiasts and new users exploring the power of AI..</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-1 items-center justify-center'>
                        <h1 className='hcol text-4xl font-bold'>$14.99</h1>
                        <span className='flex flex-col'>
                            <p className='text-sm pcol'>Per</p>
                            <p className='text-sm pcol -mt-1'>Month</p>
                        </span>
                    </div>
                    <div className='flex justify-center w-full items-center'>
                        <Link onClick={()=>comming() } className="w-full" to="/">
                            <span className="cursor-pointer block hover:bg-blue-800 duration-300 bg-blue-600 text-center rounded-md py-2 text-white font-semibold">Subscribe</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="pcol"></p>
                <div className="flex gap-2 items-start">
                    <span className='text-sm md:text-xs mt-1.5 hcol'><FiArrowRightCircle /></span>
                    <p className='pcol text-base md:text-sm'>OpenAI ChatGPT 4.0 (a $20 value)</p>
                </div>
                <div className="flex gap-2 items-start">
                    <span className='text-sm md:text-xs mt-1.5 hcol'><FiArrowRightCircle /></span>
                    <p className='pcol text-base md:text-sm'>Create Unlimited Character and use</p>
                </div>
                <div className="flex gap-2 items-start">
                    <span className='text-sm md:text-xs mt-1.5 hcol'><FiArrowRightCircle /></span>
                    <p className='pcol text-base md:text-sm'>Long-term memory for deep contextual responses</p>
                </div>
                <div className="flex gap-2 items-start">
                    <span className='text-sm md:text-xs mt-1.5 hcol'><FiArrowRightCircle /></span>
                    <p className='pcol text-base md:text-sm'>Early access to Beta features</p>
                </div>

            </div>
        </div>
    )
}

export default Premium