import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit from './pages/Edit'
import Main from './pages/Main'
import New from './pages/New'
import View from './pages/View'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<View />} />
        <Route path='/:id/edit' element={<Edit />} />
        <Route path='/new' element={<New />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
