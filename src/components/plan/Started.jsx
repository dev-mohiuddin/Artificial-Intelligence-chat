
import {FiArrowRightCircle} from 'react-icons/fi'
import { Link } from "react-router-dom"

function Started() {
  return (
    <div className='px-4 md:px-6 py-6 flex flex-col gap-2 w-full md:w-80 border dark:border-gray-600 rounded'>
        <div className='flex flex-col justify-between h-80'>
            <div className=''>
                <h3 className='text-xl text-center hcol font-semibold'>Started </h3>
                <h3 className='hcol text-center'>Collaborative Dynamics</h3>
                <p className='pcol text-center mt-3 text-base'>See what AI can do for you! Gain access to Advanced AI models and image generation.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-1 items-center justify-center'>
                    <h1 className='hcol text-4xl font-bold'>$4.99</h1>
                    <span className='flex flex-col'>
                        <p className='text-sm pcol'>Per</p>
                        <p className='text-sm pcol -mt-1'>Month</p>
                    </span>
                </div>
                <div className='flex justify-center w-full items-center'>
                    <Link className="w-full" to="/">
                        <span className="cursor-pointer block hover:bg-blue-800 duration-300 bg-blue-600 text-center rounded-md py-2 text-white font-semibold">Subscribe</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <p className="pcol"></p>
            <div className="flex gap-2 items-start">
                <span className='text-sm mt-1.5 hcol'><FiArrowRightCircle /></span>
                <p className='pcol text-base'>Unlimited access to OpenAI ChatGPT 3.5</p>
            </div>
            <div className="flex gap-2 items-start">
                <span className='text-sm mt-1.5 hcol'><FiArrowRightCircle /></span>
                <p className='pcol text-base'>Limited access to ChatGPT 4.0 (most of a $20 value)</p>
            </div>
   
        </div>
    </div>
  )
}

export default Started