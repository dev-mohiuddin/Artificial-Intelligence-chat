

import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/lib/helper'
import useAuth from '../../Hooks/useAuth'
import { getSingleUser } from '../../api/user'
import userava from '../../assets/images/characterimg/userava.png'

function ChatContainer({ infalse, messageEl, singleBot, user, chats }) {


  const me = useAuth()
  const [userData, setUserData] = useState('')

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getSingleUser(me.id)
        setUserData(data.user);
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  return (
    <div ref={messageEl} className='h-[calc(100vh-56px)] md:h-[calc(100vh-64px)] mb-14 md:mb-16 py-3 overflow-y-scroll scroll'>

      {
        chats.map((chat, val) => (
          <div key={val} className="w-full px-2 md:px-3 flex flex-col gap-1">
            <div>
              {
                chat?.user === singleBot._id &&
                <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
                  <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={baseUrl + '' + singleBot?.image} alt="" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center items-start">
                    <span className="text-base pcol bg-[#ffffff94] rounded-b-2xl rounded-r-2xl dark:bg-gray-900 mt-1 p-2 px-3">{
                      chat?.message && chat.message.split("\n").map((text, val) => {
                        return (
                          <p className='py-[3px]' key={val}  >{text}</p>
                        )
                      })
                    }</span>
                  </div>
                </div>

              }
            </div>
            <div>
              {
                chat?.user === user.id &&
                <div className="flex gap-1 md:gap-2 p-1 rounded-md md:p-2">
                  <div className="flex flex-1 flex-col justify-start items-end">
                    <p className="text-base pcol bg-[#eaeeff94] rounded-b-2xl rounded-l-2xl p-2 px-3 mt-1 dark:bg-slate-800 text-right">{chat?.message}</p>
                  </div>
                  <div className="flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full overflow-hidden">
                    <img title={user.name} className="w-full h-full object-cover" src={ userData.image == "0" ? userava : baseUrl + userData.image } alt="user" />
                  </div>
                </div>
              }
            </div>
          </div>
        ))
      }


    </div>
  )
}

export default ChatContainer