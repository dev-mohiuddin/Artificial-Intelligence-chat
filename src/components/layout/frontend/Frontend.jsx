import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from './Header'

function Frontend() {
  return (
    <div className="main-bg "> 
      <div className="glass">
        <Header />
          <div className="pt-5 md:pt-12 md:h-screen flex flex-col-reverse md:flex-row justify-between">
            <Sidebar />
              <div className="mt-[29px] mb-[56px] md:mt-0 z-50 h-[calc(100vh-104px)] w-full md:h-full overflow-hidden"><Outlet /></div>
            </div>
        </div>
    </div>
  )
}

export default Frontend