
import { Link, useNavigate } from 'react-router-dom'
import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineEdit} from 'react-icons/ai'
import {BsTrash3} from 'react-icons/bs'
import { toastMessage } from '../../toast/toastMessage'
import { baseUrl } from '../../api/lib/helper'
import { deleteCharacter } from '../../api/character'

function MyCharacterEl({ charData }) {

    const navigate = useNavigate();
    const charDelete = async(id)=>{
        try {
            const data = await deleteCharacter(id)
            toastMessage(data)
            navigate(0)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-between items-center dark:border-gray-800  border p-2'>
            <Link to={`/chat/${charData?._id}`} >
                <div className='flex gap-2'>
                    <div className='w-12 h-12 rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src={baseUrl + '' + charData.image} alt="character" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <h3 className='text-base font-semibold hcol'>{charData.name}</h3>
                            <span className='pcol mt-1 flex items-center text-xs'><BiMessageRounded size={12} />{charData.total_message}</span>
                        </div>
                        <p className='text-base pcol'>{charData.username}</p>
                    </div>
                </div>
            </Link>
            <div className='flex gap-2 items-center'>
                <span className='text-lg cursor-pointer  pcol'><AiOutlineEdit /></span>
                <span onClick={()=> charDelete(charData._id) } className='text-sm cursor-pointer text-red-600'><BsTrash3 /></span>
            </div>
        </div>
    )
}

export default MyCharacterEl