import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {PiShareFatLight, PiDotsThreeVerticalBold} from 'react-icons/pi'
import {BiMessageRounded} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function ChatHeader() {

  const navigate = useNavigate();

  return (
    <div className=' h-14 md:h-16 flex justify-between items-cente border border-x-0 border-t-0 border-b-gray-400'>
      <span onClick={()=> navigate(-1)} title='Back' className='flex items-center text-xl md:text-2xl cursor-pointer pcol'><MdOutlineArrowBackIosNew /></span>
      <div className='flex flex-col justify-center'>
        <span className='flex items-center gap-1 md:gap-2'>
          <h2 className='font-semibold text-lg hcol md:font-bold'>Mohiuddin Pro</h2>
          <p className='flex items-center text-sm font-medium pcol'> <BiMessageRounded size={14}/>2.1m</p>
        </span>
        <p className='text-sm font-normal pcol'>Created by <span className='font-medium italic'>@Mohiuddin</span></p>
      </div>
      <div className='flex items-center gap-2'>
        <span className='hcol text-xl md:text-2xl cursor-pointer'><PiShareFatLight /></span>
        <span className='hcol cursor-pointer text-xl md:text-2xl'><PiDotsThreeVerticalBold /></span>
      </div>
    </div>
  )
}

export default ChatHeader