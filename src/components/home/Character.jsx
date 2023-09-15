import {Link} from 'react-router-dom'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import { FreeMode } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/free-mode'
// import SingleCharacter from '../utils/SingleCharacter'

import { character } from "../../assets/lib/data"


function Character() {
  return (
    <div className="py-4 border border-x-0 border-t-0 border-b-gray-400">
        <div className='flex gap-14'>
            {
                character?.map((persion, val)=> (
                    <Link to={`/chat/${persion?.id}`} key={val} >
                        <div className=' h-64 w-48 px-2 py-2 rounded-md cursor-pointer bg-gradient-to-t from-blue-50 via-purple-200 to-purple-100 shadow-sm flex flex-col justify-between overflow-hidden'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-1 flex-col items-center'>
                                    <span className='w-28 h-28 overflow-hidden'><img className='w-full h-full object-cover ov rounded-3xl' src={persion.image} alt="teacher" /></span>
                                    <h3 className='text-base hcol font-bold capitalize'>{persion.name}</h3>
                                </div>
                                <p className='text-sm mb-2 pcol'>{persion.description}</p>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-sm italic font-semibold hcol'>@{persion.creator}</span>
                                <span className='text-sm font-medium hcol'>{persion.follow}</span>
                            </div>
                        </div>
                    </Link>    
                ))
            }
            {/* <Swiper
                freeMode={true}
                grabCursor={true}
                modules={FreeMode}
                className="mySwipe"
                loop={true}
            >
                {
                    character?.map((persion, val)=> (
                        <SwiperSlide key={val}>
                            <SingleCharacter persion={persion} />
                        </SwiperSlide> 
                    ))
                }
            </Swiper> */}
        </div>
    </div>
  )
}

export default Character