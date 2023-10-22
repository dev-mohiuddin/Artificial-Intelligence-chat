
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NoCharacter from '../utils/NoCharacter'
import useAuth from '../../Hooks/useAuth'
import MobileSingleCharacter from '../utils/MobileSingleCharacter'
import SingleCharacter from '../utils/SingleCharacter'
import { myCharacters, trendCharacter } from '../../api/character'

function Character() {

    const user = useAuth()
    const [button, setButton] = useState(true)
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function chData() {
            
            try {
                if(button){
                    const { character } = await trendCharacter()
                    setCharacters(character)
                }else{
                    const {myCharacter} = await myCharacters(user.id)
                    setCharacters(myCharacter);
                }
            } catch (error) {
                console.log(error)
            }
        }
        chData()
    }, [button, user.id])

    return (
        <div className=" border-0 md:border border-x-transparent border-t-transparent border-b-gray-400 dark:border-b-gray-600">
            <div className='flex justify-between items-center'>
                <div onClick={()=>setButton(!button)} className='bg-slate-200 dark:bg-slate-900 rounded. flex justify-between items-center rounded-full duration-500'>
                    <div className={`${button ? "dark:bg-slate-700 shadow bg-white rounded-full" : "" } cursor-pointer  px-2 py-0.5 `}>
                        <span className='pcol text-sm'>Trending</span>
                    </div>
                    <div onClick={()=>setButton(!button)} className={`${ button ? "" : "dark:bg-slate-700 shadow bg-white rounded-full" } cursor-pointer  px-2 py-0.5 duration-500 `}>
                        <span className='pcol text-sm '>My Bots</span>
                    </div>
                </div>
                <div className='hidden md:flex text-sm text-blue-500 hover:underline'>
                    <Link>See all Bots</Link>
                </div>
            </div>
            <div className='md:hidden flex flex-col gap-2 pt-2'>
                {
                    characters ? characters?.map((persion, val) => (
                        <MobileSingleCharacter key={val} persion={persion} />
                    )):<div className='py-3'><NoCharacter /></div>
                }
            </div>
            <div className='hidden md:flex justify-start items-center p-4 gap-5 overflow-x-auto overflow-y-hidden scroll mb-3'>
                {
                    characters ? characters?.map((persion, val) => (
                        <SingleCharacter persion={persion} key={val} />
                    )): <div className='py-6'><NoCharacter /></div>
                }
            </div>
        </div>
    )
}

export default Character