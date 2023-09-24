
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../Hooks/useAuth"
import PublicHeader from "../components/publicpage/PublicHeader"
import Hero from "../components/publicpage/Hero"


function PublicPage() {

  const navigate = useNavigate()
  const user = useAuth()

  useEffect(()=>{
    user.status ? navigate("/") : ''
  },[user])

  return (
    <div>
        <PublicHeader />
        <Hero />
    </div>
  )
}

export default PublicPage