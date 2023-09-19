import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// client pages
import Frontend from './components/layout/frontend/Frontend'
import Home from './pages/Home'
import Create from './pages/Create'
import Settings from './pages/Settings'
import Community from './pages/Community'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'

// admin pages
import AdminLayout from './components/layout/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import AdminLogin from './pages/admin/AdminLogin'
import AllUser from './pages/admin/AllUser'

function App() {

  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? 'dark' : ''}`}>

      {/* client route */}
      <Routes>
        <Route path='/' element={<Frontend dark={dark} setDark={setDark} />}>
          <Route index element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/community' element={<Community />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>
        <Route path='/chat/:id' element={<Chat />} />
        
        {/* admin route */}
        <Route path='/admin' element={<AdminLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='user' element={<AllUser />} />
        </Route>
        <Route path='/admin-login' element={<AdminLogin />} />
      </Routes>
    </div>
  )
}

export default App
