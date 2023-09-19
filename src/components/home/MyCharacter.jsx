
import { useState, useEffect } from "react"

import SingleCharacter from "../utils/SingleCharacter"
import { characterData } from "../../assets/lib/data"
import robot from '../../assets/images/characterimg/robot.png'

function MyCharacter() {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        const data = characterData.filter((element) => element.role == "me")
        setCharacter(data)
    }, [])

    return (
        <div className="w-full mt-2">
            <h3 className="hcol hidden md:flex text-lg">My Bots</h3>
            <div className='hidden md:flex justify-start items-center mt-2 mb-5 gap-5 overflow-x-auto overflow-y-hidden scroll-hide'>
                <div className=' border border-gray-300 dark:border-gray-700 h-64 w-48 flex px-2 py-2 rounded-md hover:scale-105 duration-500 flex-col justify-between overflow-hidden cardcol shadow'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-1 flex-col items-center'>
                            <span className='w-24 h-24 overflow-hidden ring-8 mt-2 ring-slate-300 dark:ring-slate-900 rounded-full'><img className='w-full h-full object-cover ov rounded-full' src={robot} alt="teacher" /></span>
                            <h3 className='text-base hcol font-bold capitalize mt-2'>Character Assistant</h3>
                        </div>
                        <p className='text-sm mb-2 pcol'>Your Ai work/study buddy</p>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-sm italic font-semibold hcol'>@Admin</span>
                        <span className='text-sm font-medium hcol'>38.2m</span>
                    </div>
                </div>
                
                {
                    character?.map((persion, val) => (
                        <SingleCharacter key={val} persion={persion} />
                    ))
                }
            </div>
        </div>
    )
}

export default MyCharacter