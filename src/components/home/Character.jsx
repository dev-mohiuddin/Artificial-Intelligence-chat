
import { character } from "../../assets/lib/data"

function Character() {
  return (
    <div>
        <div className='flex gap-5 py-4'>
            {
                character?.map((persion, val)=> (
                    <div key={val} className=' h-64 w-48 px-2 py-2 rounded-md cursor-pointer bg-gradient-to-t from-pink-200 via-purple-200 to-purple-100 shadow-sm flex flex-col justify-between overflow-hidden'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-1 flex-col items-center'>
                            <span className='w-28 h-28 overflow-hidden'><img className='w-full h-full object-cover ov rounded-3xl' src={persion.image} alt="teacher" /></span>
                            <h3 className='text-base font-bold capitalize'>{persion.name}</h3>
                        </div>
                        <p className='text-sm mb-2'>{persion.description}</p>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-sm italic font-semibold'>@{persion.creator}</span>
                        <span className='text-sm font-medium'>{persion.follow}</span>
                    </div>
                    </div>
                ))
            }
            {/* <div className=' h-64 w-48 px-2 py-2 rounded-md cursor-pointer bg-gradient-to-t from-pink-200 via-purple-200 to-purple-100 shadow-sm flex flex-col justify-between overflow-hidden'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1 flex-col items-center'>
                        <span className='w-28 h-28 overflow-hidden'><img className='w-full h-full object-cover ov rounded-3xl' src={teacher} alt="teacher" /></span>
                        <h3 className='text-base font-bold'>English Teacher</h3>
                    </div>
                    <p className='text-sm mb-2'>Hi, I am Toma. I am English teacher. You can speak with me about everything. </p>
                </div>
                <div className='flex justify-between'>
                    <span className='text-sm italic font-semibold'>@teacher</span>
                    <span className='text-sm font-medium'>2.1m</span>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Character