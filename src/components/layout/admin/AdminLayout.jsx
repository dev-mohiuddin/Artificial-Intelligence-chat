
import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminSidebar from './AdminSidebar'

function AdminLayout() {
  return (
    <div className="w-full">
      <AdminHeader />
        <div className="flex">
          <div><AdminSidebar /></div>
          <div className="flex flex-1 p-4 md:pr-8"><Outlet /></div>
        </div>
    </div>
  )
}

export default AdminLayout