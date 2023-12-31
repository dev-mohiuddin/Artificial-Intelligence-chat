

import Category from "../components/home/Category"
import Character from "../components/home/Character"
// import LatestCharacter from '../components/home/LatestCharacter.jsx'
import PreCharacter from "../components/home/PreCharacter"

function Home() {
  return (
    <div className='flex flex-col md:pt-3 gap-4 w-full h-full overflow-y-auto scroll'> 
      <div className="container">
        <Category />
        <Character />
        {/* <LatestCharacter /> */}
        <PreCharacter />
      </div>
    </div>
  )
}

export default Home