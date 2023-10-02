
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import MobileSingleCharacter from '../utils/MobileSingleCharacter'
import SingleCharacter from '../utils/SingleCharacter'
import { allCharacter } from '../../api/character'

function Character() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function chData(){
            try {
                const res = await allCharacter();
                const data = res.character ;
                setCharacters(data)
            } catch (error) {
            }
        }
        chData()
    }, [])

    return (
        <div className=" border-0 md:border border-x-transparent border-t-transparent border-b-gray-400">
            <div className='flex h-10 justify-between items-center'>
                <select className='focus:outline-0 px-2 py-1 rounded-md dark:bg-slate-800 bg-slate-100 pcol' name="" id="">
                    <option value="admin">Pre-bulid Bots</option>
                    <option value="public">Public Bots</option>
                    <option className='' value="me">My Bots</option>
                </select>
                <div className='hidden md:flex text-sm text-blue-500 hover:underline'>
                    <Link>See all Bots</Link>
                </div>
            </div>
            <div className='md:hidden flex flex-col gap-2 pt-2'>
                {
                    characters?.map((persion, val) => (
                        <MobileSingleCharacter key={val} persion={persion} />
                    ))
                }
            </div>
            <div className='hidden md:flex justify-start items-center p-4 gap-5 overflow-x-auto overflow-y-hidden scroll-hide'>
                {
                    characters?.map((persion, val) => (
                        <SingleCharacter persion={persion} key={val} />
                    ))
                }
            </div>
        </div>
    )
}

export default Character