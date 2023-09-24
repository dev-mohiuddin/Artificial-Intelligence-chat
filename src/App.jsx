import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

// client pages
import Frontend from './components/layout/frontend/Frontend'
import PublicPage from './pages/PublicPage'
import UserVerify from './pages/UserVerify'
import IsLogin from './pages/IsLogin'
import Home from './pages/Home'
import Create from './pages/Create'
import Account from './pages/Account'
import Settings from './pages/Settings'
import Community from './pages/Community'
import Chat from './pages/Chat'

// admin pages
import IsAdLogin from './pages/admin/IsAdLogin'
import AdminLayout from './components/layout/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import AdminLogin from './pages/admin/AdminLogin'
import AllUser from './pages/admin/AllUser'

function App() {

  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? 'dark' : ''}`}>
      {/* toast */}
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <Routes>
        <Route path='/home' element={<PublicPage />} />
        <Route path='/verify' element={<UserVerify />} />
        {/* client route */}
        <Route path='/' element={<IsLogin />} >
          <Route path='/' element={<Frontend dark={dark} setDark={setDark} />}>
            <Route index element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/account' element={<Account />} />
            <Route path='/community' element={<Community />} />
          </Route>
          <Route path='/chat/:id' element={<Chat />} />
        </Route>

        {/* admin route */}
        <Route path='/admin/login' element={<AdminLogin />} />

        <Route path='/admin' element={<IsAdLogin />} >
          <Route path='/admin' element={<AdminLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='user' element={<AllUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
