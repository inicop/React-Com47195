import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Detalle from './components/Pages/Detalle'
import Categoria from './components/Pages/Categoria'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path="/categories" element={<Categoria />} /> */}
        <Route path="/categories/:category" element={<Categoria />} />
        <Route path='/producto/:id' element={<Detalle />} />
      </Routes>
    </>
  )
}
export default App
