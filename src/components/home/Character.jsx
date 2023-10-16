
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import useAuth from '../../Hooks/useAuth'
import MobileSingleCharacter from '../utils/MobileSingleCharacter'
import SingleCharacter from '../utils/SingleCharacter'
import { allCharacter, myCharacters } from '../../api/character'

function Character() {

    const user = useAuth()
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function chData() {
            try {
                const { character } = await allCharacter()
                setCharacters(character)
            } catch (error) {
                console.log(error)
            }
        }
        chData()
    }, [])

    return (
        <div className=" border-0 md:border border-x-transparent border-t-transparent border-b-gray-400 dark:border-b-gray-600">
            <div className='flex h-10 justify-between items-center'>
                <select className='focus:outline-0 px-2 py-1 rounded-md dark:bg-slate-800 bg-slate-100 pcol' name="" id="">
                    <option >Public Bots</option>
                    <option >My Bots</option>
                </select>
                <div className='hidden md:flex text-sm text-blue-500 hover:underline'>
                    <Link>See all Bots</Link>
                </div>
            </div>
            <div className='md:hidden flex flex-col gap-2 pt-2'>
                {
                    characters && characters?.map((persion, val) => (
                        <MobileSingleCharacter key={val} persion={persion} />
                    ))
                }
            </div>
            <div className='hidden md:flex justify-start items-center p-4 gap-5 overflow-x-auto overflow-y-hidden scroll-hide'>
                {
                    characters && characters?.map((persion, val) => (
                        <SingleCharacter persion={persion} key={val} />
                    ))
                }
            </div>
        </div>
    )
}

export default Character