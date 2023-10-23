
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import { allCharacter } from "../../api/character"
import { baseUrl } from "../../api/lib/helper";

function PreCharacter() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const charData = async () => {
            try {
                const { character } = await allCharacter();
                setCharacters(character)
            } catch (error) {
                console.log(error)
            }
        }
        charData()
    }, [])

    return (
        <div className='py-5'>
            <div className='max-w-5xl mx-auto'>
                <p className="pcol mb-5">Latest Character</p>
                <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {

                        characters ? characters.map((person, val) => (
                            <Link key={val} to={`/chat/${person._id}`} >
                                <div className="flex justify-between items-center  hover:bg-slate-100 duration-300 bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 cursor-pointer rounded">
                                    <div className='flex gap-2 h-10 items-center'>
                                        <div className='h-9 w-9 rounded overflow-hidden'>
                                            <img className='w-full h-full object-cover' src={baseUrl + '' + person?.image} alt="img" />
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='pcol'>{person?.prompt_topic}</p>
                                        </div>
                                    </div>
                                    <div className="mr-2">
                                        <span className='text-sm font-medium hcol flex items-center justify-center'> <BiMessageRounded /> {person?.total_message}</span>
                                    </div>
                                </div>
                            </Link>
                        )) : <p className="pcol mt-5 text-center">Latest character not avilable</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default PreCharacter