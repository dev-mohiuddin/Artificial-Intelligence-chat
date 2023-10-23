

import { Link } from "react-router-dom"
import { baseUrl } from "../../api/lib/helper"

function MobileSingleCharacter({persion}) {
    return (
        <div>
            <Link to={`/chat/${persion?._id}`}>
                <div className='flex gap-2 items-center p-1 shadow-sm dark:shadow-xl rounded-md'>
                    <div className='flex items-center justify-center w-12 h-12 overflow-hidden rounded-full'>
                        <img className='h-full w-full object-cover'  src={baseUrl+''+persion?.image} alt="AI" />
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className='flex gap-2 items-center'>
                            <h3 className='text-lg hcol capitalize'>{persion?.prompt_topic}</h3>
                            <p className='text-xs italic pcol'>@{persion.username}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='pcol text-base font-normal'>Hi I am {persion?.prompt_topic}</p>
                            <span className='text-right pcol text-xs font-medium'>{persion?.total_message}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MobileSingleCharacter