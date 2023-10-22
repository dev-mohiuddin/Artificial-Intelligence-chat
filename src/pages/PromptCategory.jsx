

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { categoryCharacter } from "../api/character"
import SingleCharacter from "../components/utils/SingleCharacter"
import MobileSingleCharacter from "../components/utils/MobileSingleCharacter"
import NoCharacter from "../components/utils/NoCharacter"


function PromptCategory() {

    const { id } = useParams()
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const charData = async () => {
            try {
                const { character } = await categoryCharacter(id)
                setCharacters(character)
            } catch (error) {
                console.log(error)
            }
        }
        charData()
    }, [id])

    return (
        <div className='flex flex-col md:pt-3 gap-4 w-full h-full overflow-y-auto scroll'>
            <div className="container flex">
                <div className='md:hidden flex flex-col gap-2 pt-2'>
                    {
                        characters ? characters?.map((persion, val) => (
                            <MobileSingleCharacter key={val} persion={persion} />
                        )) : <div className='py-3'><NoCharacter /></div>
                    }
                </div>
                <div className='hidden md:flex justify-start items-center p-4 gap-5 overflow-x-auto overflow-y-hidden scroll'>
                    {
                        characters ? characters?.map((persion, val) => (
                            <SingleCharacter persion={persion} key={val} />
                        )) : <div className='py-6'><NoCharacter /></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PromptCategory