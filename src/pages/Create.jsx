

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GiOctoman } from 'react-icons/gi'
import { allPrompts } from '../api/prompt';
import useAuth from '../Hooks/useAuth'
import { toastMessage } from '../toast/toastMessage';
import { checkCharacterUsername, createCharacter } from '../api/character';

function Create() {

  const user = useAuth()
  const navigate = useNavigate();
  const [ctg, setCtg] = useState([]);
  const [file, setFile] = useState("");
  const [checkUserMsg, setCheckUserMsg] = useState('')
  const [input, setInput] = useState({
    user_id: user.id,
    prompt_id: "",
    name: "Hi",
    username: "",
    prompt_topic: "",
    visibility: true,
  });


  useEffect(() => {
    const allCgt = async () => {
      try {
        const data = await allPrompts();
        const ctgData = data?.data;
        const firstCtg = ctgData[0]._id
        setCtg(ctgData)
        setInput({
          ...input,
          user_id: user.id,
          prompt_id: firstCtg,
        })
      } catch (error) {

      }
    }
    allCgt()
  }, [])

  useEffect(()=>{
    const check = async()=>{
      const data = await checkCharacterUsername(input.username)
      setCheckUserMsg(data)
    }
    check()
  },[input.username])

  const inputHandel = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const fileHandel = (e) => {

    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0])
  }

  const createCha = async (e) => {
    e.preventDefault()
    try {
      const data = new FormData();
      data.append("image", file)
      data.append("data", JSON.stringify(input))

      const res = await createCharacter(data)
      toastMessage(res)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full py-2 md:py-4 h-full overflow-y-auto scroll'>
      <div className='container flex flex-col md:gap-8 gap-5'>
        <div className='space-y-2 md:space-y-4'>
          <div className='flex items-center gap-2'>
            <span className='hcol text-xl'><GiOctoman /></span>
            <span className='hcol text-xl'>Create a Character</span>
          </div>
          <div>
            <h1 className='hcol'>For more information about Character creation, see</h1>
          </div>
        </div>
        <form className='flex flex-col gap-5' onSubmit={createCha}>

          <div className='space-y-2'>
            <h1 className='hcol text-base'>Categories</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">Select your preferred category to create a character</label>
              <select onChange={inputHandel} name="prompt_id" className='h-10 focus:outline-0 bg-transparent border border-gray-400 dark:border-gray-600 rounded-md pcol px-3'>
                {
                  ctg && ctg?.map((item) => (
                    <option value={item._id} key={item._id} className='dark:bg-slate-900'>{item.name}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className='space-y-2'>
            <h1 className='hcol text-base'>Character Topic/Name</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">You name the subcategory according to the category.</label>
              <input onChange={inputHandel} name="prompt_topic" className='px-3 pcol bg-transparent h-10 focus:outline-none border border-gray-400 dark:border-gray-600 rounded-md ' type="text" required />
            </div>
          </div>

          {/* <div className='space-y-2'>
            <h1 className='hcol text-base'>Character name</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">Name your character according to the category.</label>
              <input onChange={inputHandel} name="prompt_topic"  className='px-3 pcol bg-transparent h-10 focus:outline-none border border-gray-400 dark:border-gray-600 rounded-md ' type="text" id="" required />
            </div>
          </div> */}

          <div className='relative space-y-2'>
            <h1 className='hcol text-base'>Character username</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">Enter a unique username.</label>
              <input onChange={inputHandel} name="username" className='px-3 pcol bg-transparent h-10 focus:outline-none border border-gray-400 dark:border-gray-600 rounded-md ' type="text" required />
            </div>
            <p className={`${checkUserMsg?.status ? "text-green-500 " : " text-red-500 " } absolute ml-1 -bottom-4 text-xs`} >{checkUserMsg?.message}</p>
          </div>

          <div className='space-y-2'>
            <h1 className='hcol text-base'>Visibility</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">Who is allowed to talk to them?</label>
              <select onChange={inputHandel} name="visibility" className='h-10 focus:outline-0 bg-transparent border border-gray-400 dark:border-gray-600 rounded-md pcol px-3'>
                <option value={true} className='dark:bg-slate-900'>Public</option>
                <option value={false} className='dark:bg-slate-900'>Private</option>
              </select>
            </div>
          </div>

          <div className='space-y-2'>
            <h1 className='hcol text-base'>Avatar</h1>
            <div className='flex flex-col gap-1'>
              <label className='pcol text-sm' htmlFor="">Upload an image. jpg, png and jpeg only</label>
              <span className='relative h-10 focus:outline-none border border-gray-400 dark:border-gray-600 rounded-md w-full flex items-center'>
                <input type="file" onChange={fileHandel} name="file" className=' inputFile placeholder:bg-red-600 z-10 bg-transparent h-8 mr-4 focus:outline-none  w-full rounded-md pcol' required />
              </span>
            </div>
          </div>
          <div className='space-y-2 mb-5'>
            <input type="submit" name="" className=' bg-blue-500 text-white font-medium px-4 cursor-pointer h-10 hover:bg-blue-900 duration-200 rounded-md ' value="Create and Chat!" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create