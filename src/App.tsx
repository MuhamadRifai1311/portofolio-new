import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layouts/AppLayout'
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/project/:slug' element={<Detail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
