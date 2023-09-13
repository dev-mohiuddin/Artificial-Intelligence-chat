import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Frontend from './components/layout/frontend/Frontend'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Frontend />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
