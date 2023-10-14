
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiMessageRounded } from 'react-icons/bi'
import { AiFillEdit, AiOutlineSetting } from 'react-icons/ai'
import { BsLightbulb } from 'react-icons/bs'
import { MdOutlineArrowBackIosNew, MdOutlineSubscriptions, MdOutlinePriceChange, MdOutlinePrivacyTip } from 'react-icons/md'
import teacher from '../assets/images/characterimg/teacher.png'
import messi from "../assets/images/characterimg/messi.png"
import robot from '../assets/images/characterimg/robot.png'
import poli from '../assets/images/characterimg/mark.png'
import Sidebar from "../components/layout/frontend/Sidebar"

import useAuth from '../Hooks/useAuth'

function Account() {

  const [user, setUser] = useState('')

  useEffect(() => {
    const userData = useAuth()
    setUser(userData)
  }, [])

  const navigate = useNavigate()

  return (
    <div className='w-full main-bg h-full overflow-y-auto scroll'>
      <div className='glass h-screen py-4 w-full flex justify-between overflow-y-auto scroll'>
        <div className="md:hidden">
          <Sidebar />
        </div>
        <div className='container'>
          <div className="max-w-3xl mx-auto flex flex-col ">
            <div className='w-full flex justify-between items-start'>
              <span onClick={() => navigate(-1)} title='Back' className='flex items-center text-xl pr-1 md:text-2xl cursor-pointer hcol'><MdOutlineArrowBackIosNew /></span>
              <div className='w-28 h-28 rounded-full overflow-hidden border-4 border-gray-400 dark:border-gray-600'>
                <img className='w-full h-full object-cover' src={teacher} alt="user" />
              </div>
              <span className='flex items-center text-xl pr-1 md:text-2xl cursor-pointer hcol'><AiFillEdit /></span>
            </div>
            <div className='flex justify-center items-center mt-2'>
              <h2 className='hcol text-lg font-semibold'>{user?.name}</h2>
            </div>
            <div className='flex justify-evenly items-center py-5 border border-b-gray-400 dark:border-b-gray-600  border-x-0 border-t-0'>
              <h2 className='hcol text-base font-medium'>Following 20</h2>
              <h2 className='hcol text-base font-medium'>Followers 10</h2>
              <h2 className='hcol text-base font-medium'>Your Bot 5</h2>
            </div>


            <div className='flex gap-4 flex-col justify-center items-start py-5 list-none border border-b-gray-400 dark:border-b-gray-600  border-x-0 border-t-0'>
              <li className='flex justify-center items-center text-base pcol gap-2 cursor-pointer hover:text-blue-500'>
                <span><MdOutlineSubscriptions /></span>
                Subscription
              </li>
              <Link to="/plan">
                <li className='flex justify-center items-center text-base pcol gap-2 cursor-pointer hover:text-blue-500'>
                  <span><MdOutlinePriceChange /></span>
                  Plan
                </li>
              </Link>
              <li className='flex justify-center items-center text-base pcol gap-2 cursor-pointer hover:text-blue-500'>
                <span><BsLightbulb /></span>
                Themes
              </li>
              <li className='flex justify-center items-center text-base pcol gap-2 cursor-pointer hover:text-blue-500'>
                <span><MdOutlinePrivacyTip /></span>
                Privacy
              </li>
            </div>

            <div className='flex flex-col gap-3 py-5 mb-12 md:mb-0'>
              <h1 className='text-center text-base font-medium pcol'>My Character</h1>

              <div className='flex justify-between items-center dark:border-gray-800  border p-2'>
                <div className='flex gap-2'>
                  <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={messi} alt="character" />
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-2 items-center'>
                      <h3 className='text-base font-semibold hcol'>Messi</h3>
                      <span className='pcol mt-1 flex items-center text-xs'><BiMessageRounded size={12} /> 0</span>
                    </div>
                    <p className='text-base pcol'>Hi I am Footballar</p>
                  </div>
                </div>
                <div>
                  <span className='text-xl md:text-2xl pcol'><AiOutlineSetting /></span>
                </div>
              </div>

              <div className='flex justify-between items-center dark:border-gray-800  border p-2'>
                <div className='flex gap-2'>
                  <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={robot} alt="character" />
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-2 items-center'>
                      <h3 className='text-base font-semibold hcol'>Robot</h3>
                      <span className='pcol mt-1 flex items-center text-xs'><BiMessageRounded size={12} /> 0</span>
                    </div>
                    <p className='text-base pcol'>Hi I am Robot</p>
                  </div>
                </div>
                <div>
                  <span className='text-xl md:text-2xl pcol'><AiOutlineSetting /></span>
                </div>
              </div>

              <div className='flex justify-between items-center dark:border-gray-800   border p-2'>
                <div className='flex gap-2'>
                  <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={poli} alt="character" />
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-2 items-center'>
                      <h3 className='text-base font-semibold hcol'>Politic</h3>
                      <span className='pcol mt-1 flex items-center text-xs'><BiMessageRounded size={12} /> 0</span>
                    </div>
                    <p className='text-base pcol'>Hi I am Politicion</p>
                  </div>
                </div>
                <div>
                  <span className='text-xl md:text-2xl pcol'><AiOutlineSetting /></span>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Account