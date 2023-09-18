import { Routes, Route } from 'react-router-dom'

// client pages
import Frontend from './components/layout/frontend/Frontend'
import Admin from './components/layout/admin/Admin'
import Home from './pages/Home'
import Create from './pages/Create'
import Settings from './pages/Settings'
import Community from './pages/Community'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'

// admin pages
import Dashboard from './pages/admin/Dashboard'
import AllUser from './pages/admin/AllUser'

function App() {

  return (
    <div className='dark'>
      <Routes>
        <Route path='/' element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/community' element={<Community />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>
        
        <Route path='/admin' element={<Admin />} >
          <Route index element={<Dashboard />} />
          <Route path='user' element={<AllUser />} />
        </Route>

        <Route path='/chat/:id' element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
