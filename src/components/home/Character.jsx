import { Link } from 'react-router-dom'
import SingleCharacter from '../utils/SingleCharacter'

import { character } from "../../assets/lib/data"

function Character() {
    return (
        <div className="md:pb-4 border-0 md:border border-x-transparent border-t-transparent border-b-gray-400">
            <div className='md:hidden flex flex-col gap-2'>
                {
                    character?.map((persion, val) => (
                        <Link to={`/chat/${persion?.id}`} key={val}>
                            <div className='flex gap-2 items-center p-1 rounded-md'>
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
                    ))
                }
            </div>
            <div className='hidden md:flex justify-start items-center gap-5 overflow-x-auto scroll-hide'>
                {
                    character?.map((persion, val) => (
                        <SingleCharacter key={val} persion={persion} />
                    ))
                }
            </div>
        </div>
    )
}

export default Character