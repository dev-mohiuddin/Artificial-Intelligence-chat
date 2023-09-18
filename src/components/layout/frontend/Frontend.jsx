import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from './Header'

function Frontend({dark, setDark}) {
  return (
    <div className="main-bg "> 
      <div className="glass">
        <Header dark={dark} setDark={setDark}/>
          <div className=" md:max-w-[1440px] mx-auto pt-5 md:pt-12 md:h-screen flex flex-col-reverse md:flex-row justify-between">
            <Sidebar />
              <div className="mt-[29px] mb-[56px] md:mt-0 md:mb-0 z-10 h-[calc(100vh-104px)] w-full md:h-full overflow-hidden"><Outlet /></div>
            </div>
        </div>
    </div>
  )
}

export default Frontend