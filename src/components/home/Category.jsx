

import { categroy } from "../../assets/lib/data"


function Category() {
  return (
    <div>
        <div className='flex items-center gap-5'>
            {
                categroy?.map((item)=>(
                    <span className="bg-purple-100 px-3 py-1 rounded-md cursor-pointer capitalize" key={item.key}>
                        <li className="list-none text-base pcol">{item.name}</li>
                    </span>
                ))
            }
        </div>
    </div>
  )
}

export default Category