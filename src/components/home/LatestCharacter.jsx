

import { useState, useEffect } from "react"
import SingleCharacter from "../utils/SingleCharacter"
import MobileSingleCharacter from "../utils/MobileSingleCharacter";
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
            <div className='md:hidden flex flex-col gap-2 pt-2'>
                {
                    characters ? characters?.map((persion, val) => (
                        <MobileSingleCharacter key={val} persion={persion} />
                    )) : <p className="pcol mt-5 text-center">Latest character not avilable</p>
                }
            </div>
            <div className='hidden md:flex justify-start items-center p-4 gap-5 overflow-x-auto overflow-y-hidden scroll mb-3'>
                {
                    characters ? characters?.map((persion, val) => (
                        <SingleCharacter persion={persion} key={val} />
                    )) : <p className="pcol mt-5 text-center">Latest character not avilable</p>
                }
            </div>
        </div>
    )
}

export default LatestCharacter