

import { useState, useEffect } from "react"
import SingleCharacter from "../utils/SingleCharacter"
import { allCharacter } from "../../api/character"


function LatestCharacter() {

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
        <div className='py-2'>
            <div className='hcol'>Latest Character</div>
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

export default LatestCharacter