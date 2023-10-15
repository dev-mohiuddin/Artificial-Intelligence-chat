
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai'
import { BsLightbulb } from 'react-icons/bs'
import { MdOutlineArrowBackIosNew, MdOutlineSubscriptions, MdOutlinePriceChange, MdOutlinePrivacyTip } from 'react-icons/md'
import teacher from '../assets/images/characterimg/teacher.png'
import Sidebar from "../components/layout/frontend/Sidebar"
import MyCharacterEl from '../components/account/myCharacterEl'
import { myCharacters } from '../api/character'
import useAuth from '../Hooks/useAuth'

function Account() {

  const user = useAuth()
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    const myCh = async()=>{
      try {
        const {myCharacter} = await myCharacters(user.id)
        setCharacters(myCharacter)
      } catch (error) {
        console.log(error)
      }
    }
    myCh();
  },[])

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
              <h2 className='hcol text-base font-medium'>Your Bot {characters?.length}</h2>
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

              {
                characters && characters.map((charData)=>(
                  <MyCharacterEl key={charData._id} charData={charData} />
                ))
              }
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Account