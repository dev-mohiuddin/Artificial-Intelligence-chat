
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { BsLightbulb, BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineArrowBackIosNew, MdOutlineSubscriptions, MdOutlinePriceChange, MdOutlinePrivacyTip, MdDone } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Sidebar from "../components/layout/frontend/Sidebar"
import MyCharacterEl from '../components/account/myCharacterEl'
import NoCharacter from '../components/utils/NoCharacter'
import { baseUrl } from '../api/lib/helper'
import { myCharacters } from '../api/character'
import { userProfile, getSingleUser } from '../api/user'
import useAuth from '../Hooks/useAuth'
import { toastMessage } from '../toast/toastMessage'

function Account() {

  const user = useAuth()
  const navigate = useNavigate()
  const [userData, setUserData] = useState('')
  const [characters, setCharacters] = useState([])
  const [file, setFile] = useState("")

  useEffect(() => {
    const myCh = async () => {
      try {
        const { myCharacter } = await myCharacters(user.id)
        setCharacters(myCharacter)
      } catch (error) {
        console.log(error)
      }
    }
    myCh();
  }, [])

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getSingleUser(user.id)
        setUserData(data.user);
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  const fileHandel = (e) => {

    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0])
  }

  const upload = async () => {
    const data = new FormData();
    data.append("image", file)
    data.append("data", JSON.stringify({ user_id: user.id }))
    const res = await userProfile(data);
    toastMessage(res)
    setFile("")
    navigate("/")
  }

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
              <div className='relative w-28 h-28 rounded-full border-4 border-gray-400 dark:border-gray-600'>
                <img className=' w-full h-full object-cover rounded-full overflow-hidden' src={baseUrl + '' + userData?.image} alt="user" />
                <span className='absolute flex justify-center items-center  bottom-0 -right-3'>
                  {
                    file ?
                      <span onClick={() => setFile("")} className='relative mr-2 text-red-500 cursor-pointer '><RxCross2 size={20} /></span> : <span className='flex justify-center items-center'>
                        <input onChange={fileHandel} className='w-8 h-8 opacity-0 z-10' type="file" name='' />
                        <span className='absolute pcol'><FiEdit size={18} /></span>
                      </span>
                  }
                  <span onClick={upload} className={`${file ? "block" : "hidden"} absolute -right-4 cursor-pointer text-green-500 `} ><MdDone size={20} /> </span>
                </span>
              </div>
              <span className='flex items-center text-xl pr-1 md:text-2xl cursor-pointer hcol'><BsThreeDotsVertical /></span>
            </div>
            <div className='flex justify-center items-center mt-2'>
              <h2 className='hcol text-lg font-semibold'>{user?.name}</h2>
            </div>
            <div className='flex justify-evenly items-center py-5 border border-b-gray-400 dark:border-b-gray-600  border-x-0 border-t-0'>
              <h2 className='hcol text-base font-medium'>Following 0</h2>
              <h2 className='hcol text-base font-medium'>Followers 0</h2>
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
                characters ? characters.map((charData) => (
                  <MyCharacterEl key={charData._id} charData={charData} />
                )) : <NoCharacter />
              }
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Account