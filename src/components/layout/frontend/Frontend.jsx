import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from './Header'

function Frontend() {
  return (
    <div className="main-bg "> 
      <div className="glass">
        <Header />
          <div className="md:pl-8 pt-5 md:pt-12 md:h-screen flex flex-col-reverse md:flex-row justify-between">
            <Sidebar />
              <div className="md:flex-1 mt-[29px] md:mt-0 z-50 h-[calc(100vh-104px)] md:h-full"><Outlet /></div>
            </div>
        </div>
    </div>
  )
}

export default Frontend