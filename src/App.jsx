import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'


// public Routes
import PublicPage from './pages/PublicPage'
import UserVerifyComplete from './pages/utilisPage/UserVerifyComplete'
import UserVerify from './pages/utilisPage/UserVerify'
import ForgotPass from './pages/utilisPage/ForgotPass'
import PasswordUpdate from './pages/utilisPage/PasswordUpdate'

// client pages
import Frontend from './components/layout/frontend/Frontend'
import IsLogin from './pages/utilisPage/IsLogin'
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
import AllUser from './pages/admin/AllUser'
import AllPrompts from './pages/admin/AllPrompts'
import CreatePrompt from './pages/admin/CreatePrompt'

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

        {/* public Route */}
        <Route path='/home' element={<PublicPage />} />
        <Route path='/verify' element={<UserVerify />} />
        <Route path='/verify/:url' element={<UserVerifyComplete />} />
        <Route path='/forgot-password' element={<ForgotPass />} />
        <Route path='/forgot-password/:url' element={<PasswordUpdate />} />

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
        <Route path='/admin' element={<IsAdLogin />} >
          <Route path='/admin' element={<AdminLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='all-users' element={<AllUser />} />
            <Route path='create-prompt' element={<CreatePrompt />} />
            <Route path='all-prompts' element={<AllPrompts />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
