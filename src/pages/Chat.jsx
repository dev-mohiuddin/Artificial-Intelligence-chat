
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ChatHeader from '../components/chat/ChatHeader'
import ChatContainer from '../components/chat/ChatContainer'
import ChatFooter from '../components/chat/ChatFooter'

import {characterData} from '../assets/lib/data'


function Chat() {

  const {id} = useParams();
  const [aiChat, setAiChat] = useState([]);
  
  useEffect(()=>{
    const data = characterData.find((ai)=> ai.id == id)
    setAiChat(data)
  }, [id])  

  return (
    <div className='w-full main-bg'>
        <div className='glass h-screen '>
            <div className='container px-0 relative max-w-3xl h-screen flex flex-col justify-between'>
                <ChatHeader aiChat={aiChat} />
                <ChatContainer aiChat={aiChat} />
                <ChatFooter />
            </div>
        </div>
    </div>
  )
}

export default Chat