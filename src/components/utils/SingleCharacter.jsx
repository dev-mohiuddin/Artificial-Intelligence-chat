import { Link } from "react-router-dom"
// import robot2 from "../../assets/images/characterimg/robot3.png"
import {BiMessageRounded} from 'react-icons/bi'
import { baseUrl } from "../../api/lib/helper"

function SingleCharacter({persion}) {

    return (
        <>
            <Link to={`/chat/${persion?._id}`} >
                <div className=' cursor-pointer border border-gray-300 dark:border-gray-700 h-56 w-44 flex px-2 py-3 rounded-md hover:scale-105 duration-500 flex-col justify-between overflow-hidden cardcol shadow'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-1 flex-col items-center'>
                            <span className='w-24 h-24 overflow-hidden'><img className='w-full h-full object-cover ov rounded-3xl' src={baseUrl+''+persion?.image} alt="teacher" /></span>
                            <h3 className='text-base hcol font-bold capitalize'>{persion?.name}</h3>
                        </div>
                        <p className='text-sm mb-2 pcol text-center'>{persion?.prompt_topic}</p>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-sm italic font-semibold hcol'>@{persion?.creator}</span>
                        <span className='text-sm font-medium hcol flex items-center justify-center gap-1'> <BiMessageRounded /> {persion?.total_message}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SingleCharacter