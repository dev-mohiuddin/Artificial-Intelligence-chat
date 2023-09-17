

import Category from "../components/home/Category"
import Character from "../components/home/Character"


function Home() {
  return (
    <div className='flex flex-col gap-4 h-full overflow-y-scroll'> 
      <div className=" container">
        <Category />
        <Character />
      </div>
    </div>
  )
}

export default Home