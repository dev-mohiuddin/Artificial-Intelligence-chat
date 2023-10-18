
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
            <div className='flex justify-between items-center'>
                <div className='bg-slate-200 dark:bg-slate-900 rounded flex justify-between items-center'>
                    <div className='cursor-pointer dark:bg-slate-800 shadow-md bg-white px-2 py-0.5 '>
                        <span className='pcol text-sm'>Public</span>
                    </div>
                    <div className='cursor-pointer px-2 py-0.5'>
                        <span className='pcol text-sm '>My Bots</span>
                    </div>
                </div>
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