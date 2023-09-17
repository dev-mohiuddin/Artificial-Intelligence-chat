

import Category from "../components/home/Category"
import Character from "../components/home/Character"


function Home() {
  return (
    <div className='flex flex-col gap-4'> 
      <Category />
      <Character />
    </div>
  )
}

export default Home