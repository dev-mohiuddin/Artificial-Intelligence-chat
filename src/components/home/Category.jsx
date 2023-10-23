
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react"
import { allPrompts } from "../../api/prompt"


function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        async function getCategory() {
            try {
                const { data } = await allPrompts();
                setCategory(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategory()
    }, [])

    return (
        <div>
            <div className='flex items-center py-2 gap-4 overflow-x-auto scroll'>
                {
                    category ? category.map((item) => (
                        <Link to={`/category/${item._id}`} key={item._id} className='shrink-0' >
                            <div className="bg-slate-100 shadow-sm dark:bg-gray-800 px-3 py-1 rounded-md cursor-pointer capitalize">
                                <li className="list-none text-base font-medium pcol">{item.name}</li>
                            </div>
                        </Link>
                    )): <p className='pcol py-1'>Category not found</p>
                }
            </div>
        </div>
    )
}

export default Category