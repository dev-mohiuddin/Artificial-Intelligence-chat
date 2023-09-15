import {Routes, Route} from 'react-router-dom'

import Frontend from './components/layout/frontend/Frontend'
import Home from './pages/Home'
import Create from './pages/Create'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Frontend />}>
        <Route index element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>

      <Route path='/chat/:id' element={<Chat />} />
    </Routes>
  )
}

export default App
