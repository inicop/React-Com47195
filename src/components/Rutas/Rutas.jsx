import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Detalle from '../Pages/Detalle'
import Categoria from '../Pages/Categoria'
import UserProfile from '../Pages/UserProfile'
import Cart from '../Pages/Cart/'
import Checkout from '../Pages/Checkout'

const Rutas = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<UserProfile />} />
                <Route path="/categories/:category" element={<Categoria />} />
                <Route path='/producto/:id' element={<Detalle />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout/:orderId' element={<Checkout />} />
                
                
            </Routes>
        </div>
    )
}

export default Rutas