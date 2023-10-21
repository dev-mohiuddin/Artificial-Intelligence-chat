


import { Link } from "react-router-dom"
import { AiOutlinePlus } from "react-icons/ai"

function NoCharacter() {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <p className='pcol'>You have no character</p>
            <Link to="/create">
                <span className='flex items-center text-white bg-blue-500 rounded px-3 py-1 gap-2'><AiOutlinePlus size={18} /> Create</span>
            </Link>
        </div>
    )
}

export default NoCharacter