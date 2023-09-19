
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'



import MobileSingleCharacter from '../utils/MobileSingleCharacter'
import SingleCharacter from '../utils/SingleCharacter'

import { characterData } from "../../assets/lib/data"

function Character() {

    const [character, setCharacter] = useState([]);
    const [option, setOption] = useState("admin");

    useEffect(() => {
        let data = characterData.filter((element) => element.role == option)
        setCharacter(data)
    }, [option])

    return (
        <div className="md:pb-4 border-0 md:border border-x-transparent border-t-transparent border-b-gray-400">
            <div className='flex h-10 justify-between items-center'>
                <select onChange={(e) => setOption(e.target.value)} className='focus:outline-0 px-2 py-1 rounded-md dark:bg-slate-800 bg-slate-100 pcol' name="" id="">
                    <option value="admin">Pre-bulid Bots</option>
                    <option value="public">Public Bots</option>
                    <option className='md:hidden' value="me">My Bots</option>
                </select>
                <div className='hidden md:flex text-sm text-blue-500 hover:underline'>
                    <Link>See all Bots</Link>
                </div>
            </div>
            <div className='md:hidden flex flex-col gap-2 pt-2'>
                {
                    character?.map((persion, val) => (
                        <MobileSingleCharacter key={val} persion={persion} />
                    ))
                }
            </div>
            <div className='hidden md:flex justify-start items-center mt-2 gap-5 overflow-x-auto overflow-y-hidden scroll-hide'>
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