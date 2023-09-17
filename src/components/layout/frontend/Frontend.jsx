import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from './Header'

function Frontend() {
  return (
    <div className="main-bg "> 
      <div className="glass">
        <Header />
          <div className="md:container pt-5 md:pt-12 md:h-screen flex flex-col-reverse md:flex-row justify-between md:gap-10">
            <Sidebar />
              <div className="md:flex-1 px-3 md:px-0 py-4 h-[calc(100vh-74px)] md:h-full overflow-y-auto scroll-hide "><Outlet /></div>
            </div>
        </div>
    </div>
  )
}

export default Frontend