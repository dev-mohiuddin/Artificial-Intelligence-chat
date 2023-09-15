import {AiOutlineSend} from 'react-icons/ai'

function ChatFooter() {
  return (
    <div className=' border border-x-0 border-b-0 border-t-gray-400'>
      <div className='relative flex justify-center items-center h-14 md:h-16'>
        <input className=' md:mx-4 outline-none rounded-full w-full border border-blue-500 bg-transparent h-9 px-4' type="text" name=""  />
        <span className='absolute md:mx-4 right-1 text-xl text-blue-500 cursor-pointer p-1'><AiOutlineSend /></span>
      </div>
    </div>
  )
}

export default ChatFooter