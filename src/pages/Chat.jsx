
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef} from 'react'
import { AiOutlineSend } from 'react-icons/ai'

import ChatHeader from '../components/chat/ChatHeader'
import ChatContainer from '../components/chat/ChatContainer'
import useAuth from '../Hooks/useAuth'
import { singleCharacter, characterReplay } from '../api/character'


function Chat() {

  const user = useAuth()
  const { id } = useParams();
  const messageEl = useRef(null);
  const [infalse, setInFalse] = useState(false)
  const [singleBot, setSingleBot] = useState([]);
  const [inputData, setInputData] = useState({
    user_id : user.id,
    character_id : id,
    userInput : "",
  })

  const [chats, setChats] = useState([
    {
      user: id,
      message: `How can I help you today? 😍`
    },
  ])

  useEffect(() => {
    async function getCharacter(id) {
      try {
        const data = await singleCharacter(id);
        const charaData = data?.character[0];
        setSingleBot(charaData)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacter(id)
  }, [id])

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  const inputHandel = (e)=>{
    setInputData({
      ...inputData,
      [e.target.name] : e.target.value,
    })
  }

  const onSubmitHandel = async (e)=>{
    e.preventDefault()
    try {
      setInFalse(true)
      setChats([...chats, {user: user.id, message : inputData.userInput}])
      setInputData({...inputData, userInput : ""})
      const data = await characterReplay(inputData)
      console.log(data.reply)
      setChats([...chats,
        {user : user.id , message : inputData.userInput},
        {user: id, message : data.reply}
      ])
      setInFalse(false)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full main-bg'>
      <div className='glass h-screen '>
        <div className='container px-0 relative max-w-3xl h-screen flex flex-col justify-between'>
          <ChatHeader singleBot={singleBot} />
          <ChatContainer messageEl={messageEl} chats={chats} user={user} singleBot={singleBot} />

          <div className='fixed bottom-0 w-full flex'>
            <div className='w-[768px] dark:bg-slate-900 bg-slate-100 px-3 border border-x-0 border-b-0 border-t-gray-400 dark:border-t-gray-600'>
              <form onSubmit={onSubmitHandel} >
                <div className='relative flex justify-center items-center h-14 md:h-16'>
                  <input onChange={inputHandel} value={inputData.userInput} name='userInput' className=' md:mx-4 outline-none rounded-full w-full border border-blue-500 bg-transparent h-9 px-4 pcol' placeholder='Type your message' type="text" required />
                  <input className='absolute md:mx-4 right-0 opacity-0 p-1 rounded-2xl cursor-pointer z-10' type="submit"  disabled={infalse} value="Click" />
                  <span className='absolute md:mx-4 right-1 text-xl text-blue-500 cursor-pointer p-1'><AiOutlineSend /></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat