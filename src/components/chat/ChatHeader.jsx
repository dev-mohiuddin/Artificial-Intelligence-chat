import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { PiShareFatLight, PiDotsThreeVerticalBold } from 'react-icons/pi'
import { BiMessageRounded } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../api/lib/helper'
import { comming } from '../../api/lib/helper'

function ChatHeader({ singleBot }) {

  const navigate = useNavigate();

  return (
    <div className='w-full'>
      <div className=' dark:bg-slate-900 md:bg-gradient-to-r from-transparent via-transparent to-transparent px-2 md:px-3 h-14 md:h-16 flex justify-between items-cente border border-x-0 border-t-0 border-b-gray-400 dark:border-b-gray-600'>
        <span onClick={() => navigate(-1)} title='Back' className='flex items-center text-xl pr-1 md:text-2xl cursor-pointer hcol'><MdOutlineArrowBackIosNew /></span>
        <div className='flex items-center gap-2 '>
          <div className='flex justify-center items-center rounded-full overflow-hidden h-10 w-10 md:w-12 md:h-12 '>
            <img className='w-full h-full object-cover' src={baseUrl+''+singleBot?.image} alt="ai" />
          </div>
          <div className='flex flex-1 flex-col justify-center'>
            <span className='flex items-center gap-1 md:gap-2'>
              <h2 className='font-semibold text-lg hcol md:font-bold capitalize'>{singleBot?.prompt_topic}</h2>
              <p className='flex items-center text-xs font-medium pcol gap-1'> <BiMessageRounded size={14} />{singleBot?.total_message}</p>
            </span>
            <p className='text-sm font-normal pcol'>Created by <span className='font-medium italic'>@{singleBot?.user_id?.name}</span></p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span onClick={()=>comming() } className='hcol text-xl md:text-2xl cursor-pointer'><PiShareFatLight /></span>
          <span onClick={()=>comming() } className='hcol cursor-pointer text-xl md:text-2xl'><PiDotsThreeVerticalBold /></span>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader