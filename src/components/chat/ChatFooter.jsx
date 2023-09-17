import { AiOutlineSend } from 'react-icons/ai'

function ChatFooter() {
  return (
    <div className='fixed bottom-0 w-full flex'>
      <div className=' w-[768px] bg-gradient-to-l from-pink-50 via-purple-50 to-pink-50 px-3 border border-x-0 border-b-0 border-t-gray-400 dark:border-t-gray-600 dark:bg-gradient-to-l from-transparent via-slate-950 to-transparent md:dark:bg-gradient-to-r from-transparent via-transparent to-transparent'>
        <div className='relative flex justify-center items-center h-14 md:h-16'>
          <input className=' md:mx-4 outline-none rounded-full w-full border border-blue-500 bg-transparent h-9 px-4 pcol' placeholder='Type your message' type="text" name="" />
          <span className='absolute md:mx-4 right-1 text-xl text-blue-500 cursor-pointer p-1'><AiOutlineSend /></span>
        </div>
      </div>
    </div>
  )
}

export default ChatFooter