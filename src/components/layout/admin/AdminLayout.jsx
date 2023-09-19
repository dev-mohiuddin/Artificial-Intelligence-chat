
import { Outlet } from "react-router-dom"

function AdminLayout() {
  return (
    <div>
        <div><Outlet /></div>
    </div>
  )
}

export default AdminLayout