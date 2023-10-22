import React from 'react'
//import Inicio from '../../pages/Inicio'
//import Detalle from '../../pages/Detalle'
//import Categoria from '../../pages/Categoria'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Detalle from '../Pages/Detalle'
import Categoria from '../Pages/Categoria'
import UserProfile from '../Pages/UserProfile'
import Cart from '../Pages/Cart/'

const Rutas = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<UserProfile />} />
                <Route path="/categories/:category" element={<Categoria />} />
                <Route path='/producto/:id' element={<Detalle />} />
                <Route path='/cart' element={<Cart />} />
                
                
            </Routes>
        </div>
    )
}

export default Rutas