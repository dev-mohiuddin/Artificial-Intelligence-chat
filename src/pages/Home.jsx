

import Category from "../components/home/Category"
import Character from "../components/home/Character"
import LatestCharacter from '../components/home/LatestCharacter.jsx'

function Home() {
  return (
    <div className='flex flex-col md:pt-3 gap-4 w-full h-full overflow-y-auto scroll'> 
      <div className="container">
        <Category />
        <Character />
        <LatestCharacter />
      </div>
    </div>
  )
}

export default Home