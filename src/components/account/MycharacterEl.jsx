

import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'

import { baseUrl } from '../../api/lib/helper'

function MyCharacterEl({charData}) {
    return (
        <div className='flex justify-between items-center dark:border-gray-800  border p-2'>
            <div className='flex gap-2'>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={baseUrl+''+charData.image} alt="character" />
                </div>
                <div className='flex flex-col'>
                    <div className='flex gap-2 items-center'>
                        <h3 className='text-base font-semibold hcol'>{charData.name}</h3>
                        <span className='pcol mt-1 flex items-center text-xs'><BiMessageRounded size={12} />{charData.total_message}</span>
                    </div>
                    <p className='text-base pcol'>{charData.username}</p>
                </div>
            </div>
            <div>
                <span className='text-xl md:text-2xl pcol'><AiOutlineSetting /></span>
            </div>
        </div>
    )
}

export default MyCharacterEl