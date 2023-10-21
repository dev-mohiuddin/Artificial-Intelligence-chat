
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import MobileSingleCharacter from "../components/utils/MobileSingleCharacter"
import SingleCharacter from "../components/utils/SingleCharacter"
import { searchCharacter } from "../api/character"
import { toastMessage } from "../toast/toastMessage"


function SearchCharacter() {

    const navigate = useNavigate()
    const {username} = useParams()
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        const search = async()=>{
            try {
                const data = await searchCharacter(username)
                if(data.status){
                    setCharacters(data.character)
                }else{
                    toastMessage(data)
                    navigate("/")
                }
            } catch (error) {
                console.log(error)
            }
        }
        search()
    },[username])


  return (
    <div className='flex flex-col md:pt-3 gap-4 w-full h-full overflow-y-auto scroll'>
    <div className="container flex">
        <div className='md:hidden flex flex-col gap-2 pt-2'>
            {
                characters ? characters?.map((persion, val) => (
                    <MobileSingleCharacter key={val} persion={persion} />
                )) : <p>{message}</p>
            }
        </div>
        <div className='hidden md:flex justify-start items-center p-4 gap-5 overflow-x-auto overflow-y-hidden scroll-hide'>
            {
                characters ? characters?.map((persion, val) => (
                    <SingleCharacter persion={persion} key={val} />
                )) : <p>{message} hi</p>
            }
        </div>
    </div>
</div>
  )
}

export default SearchCharacter