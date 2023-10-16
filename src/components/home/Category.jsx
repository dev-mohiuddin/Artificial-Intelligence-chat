

import { useState, useEffect } from "react"
import { allPrompts } from "../../api/prompt"


function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        async function getCategory() {
            try {
                const {data} = await allPrompts();
                setCategory(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategory()
    },[])

    return (
        <div>
            <div className='flex items-center py-2 gap-4 overflow-x-auto scroll-hide'>
                {
                    category && category.map((item) => (
                        <div className="bg-slate-100 shadow-sm dark:bg-gray-800 px-3 py-1 rounded-md cursor-pointer capitalize" key={item._id}>
                            <li className="list-none text-base font-medium pcol">{item.name}</li>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category