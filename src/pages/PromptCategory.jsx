

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { categoryCharacter } from "../api/character"
import SingleCharacter from "../components/utils/SingleCharacter"


function PromptCategory() {

    const {id} = useParams()
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const charData = async () => {
            try {
                const {character} = await categoryCharacter(id)
                setCharacters(character)
            } catch (error) {
                console.log(error)
            }
        }
        charData()
    }, [id])

    return (
        <div className='flex flex-col md:pt-3 gap-4 w-full h-full overflow-y-auto scroll'>
            <div className="container flex gap-5">
                {
                    characters && characters?.map((persion, val) => (
                        <SingleCharacter persion={persion} key={val} />
                    ))
                }
            </div>
        </div>
    )
}

export default PromptCategory