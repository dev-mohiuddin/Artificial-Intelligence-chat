import { Link } from "react-router-dom"

function SingleCharacter({persion}) {

    return (
        <>
            <Link to={`/chat/${persion?.id}`} >
                <div className=' h-64 w-48 flex px-2 py-2 rounded-md bg-slate-100 flex-col justify-between overflow-hidden dark:bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 shadow'>
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
        </>
    )
}

export default SingleCharacter