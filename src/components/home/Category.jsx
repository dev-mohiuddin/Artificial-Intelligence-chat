

import { categroy } from "../../assets/lib/data"


function Category() {
  return (
    <div>
        <div className='flex items-center py-2 gap-4 overflow-x-auto'>
            {
                categroy?.map((item)=>(
                    <div className="bg-slate-100 shadow-sm dark:bg-gray-800 px-3 py-1 rounded-md cursor-pointer capitalize" key={item.key}>
                        <li className="list-none text-base font-medium pcol">{item.name}</li>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category