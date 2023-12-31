import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'


// public Routes
import PublicPage from './pages/PublicPage'
import UserVerifyComplete from './pages/utilisPage/UserVerifyComplete'
import UserVerify from './pages/utilisPage/UserVerify'
import ForgotPass from './pages/utilisPage/ForgotPass'
import PasswordUpdate from './pages/utilisPage/PasswordUpdate'
import ReVerify from './pages/utilisPage/ReVerify'

// client pages
import Frontend from './components/layout/frontend/Frontend'
import IsLogin from './pages/utilisPage/IsLogin'
import Home from './pages/Home'
import PromptCategory from './pages/PromptCategory'
import Create from './pages/Create'
import Account from './pages/Account'
import Settings from './pages/Settings'
import Community from './pages/Community'
import Chat from './pages/Chat'
import Plan from './pages/Plan'
import SearchCharacter from './pages/SearchCharacter'

// admin pages
import IsAdLogin from './pages/admin/IsAdLogin'
import AdminLayout from './components/layout/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import AllUser from './pages/admin/AllUser'
import AllPrompts from './pages/admin/AllPrompts'
import CreatePrompt from './pages/admin/CreatePrompt'

function App() {

  const [dark, setDark] = useState("dark")

  useEffect(()=>{
    // localStorage.setItem("themes", "dark")
    const themes = localStorage.getItem("themes")
    setDark(themes)
  },[ ])

  return (
    <div className={dark}>
      {/* toast */}
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <Routes>

        {/* public Route */}
        <Route path='/home' element={<PublicPage />} />
        <Route path='/verify' element={<UserVerify />} />
        <Route path='/re-verify' element={<ReVerify />} />
        <Route path='/verify/:url' element={<UserVerifyComplete />} />
        <Route path='/forgot-password' element={<ForgotPass />} />
        <Route path='/forgot-password/:url' element={<PasswordUpdate />} />

        {/* client route */}
        <Route path='/' element={<IsLogin />} >
          <Route path='/' element={<Frontend dark={dark} setDark={setDark} />}>
            <Route index element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/category/:id' element={<PromptCategory />} />
            <Route path='/search/:username' element={<SearchCharacter />} />
            <Route path='/community' element={<Community />} />
            <Route path='/plan' element={<Plan />} />
          </Route>
          <Route path='/chat/:id' element={<Chat />} />
          <Route path='/account' element={<Account />} />
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
