import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from './Header'

function Frontend() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-pink-400 to-blue-600"> 
      <div className="glass">
        <Header />
          <div className="container flex pt-12 gap-10 glass">
            <Sidebar />
              <div className="flex-1 py-4"><Outlet /></div>
            </div>
        </div>
    </div>
  )
}

export default Frontend