import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from './Header'

function Frontend() {
  return (
    <div className="main-bg"> 
      <div className="glass">
        <Header />
          <div className="container h-screen flex flex-col-reverse md:flex-row justify-between pt-12 gap-10">
            <Sidebar />
              <div className="flex-1 py-4"><Outlet /></div>
            </div>
        </div>
    </div>
  )
}

export default Frontend