

import { Link } from "react-router-dom"

function MobileSingleCharacter({persion}) {
    return (
        <div>
            <Link to={`/chat/${persion?.id}`}>
                <div className='flex gap-2 items-center p-1 shadow-sm dark:shadow-xl rounded-md'>
                    <div className='flex items-center justify-center w-12 h-12 overflow-hidden rounded-full'>
                        <img className='h-full w-full object-cover' src={persion.image} alt="AI" />
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className='flex gap-2 items-center'>
                            <h3 className='text-lg hcol capitalize'>{persion.name}</h3>
                            <p className='text-xs italic pcol'>@{persion.creator}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='pcol text-base font-normal'>{persion.description.substring(0, 30)}...</p>
                            <span className='text-right pcol text-xs font-medium'>{persion.follow}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MobileSingleCharacter