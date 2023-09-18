
import MobileSingleCharacter from '../utils/MobileSingleCharacter'
import SingleCharacter from '../utils/SingleCharacter'

import { character } from "../../assets/lib/data"

function Character() {
    return (
        <div className="md:pb-4 border-0 md:border border-x-transparent border-t-transparent border-b-gray-400">
            <div className='md:hidden flex flex-col gap-2 pt-2'>
                {
                    character?.map((persion, val) => (
                        <MobileSingleCharacter key={val} persion={persion} />
                    ))
                }
            </div>
            <div className='hidden md:flex justify-start items-center gap-5 overflow-x-auto scroll-hide'>
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