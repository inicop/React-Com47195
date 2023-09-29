import React from 'react'
//import Inicio from '../../pages/Inicio'
//import Detalle from '../../pages/Detalle'
//import Categoria from '../../pages/Categoria'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Detalle from '../Pages/Detalle'
import Categoria from '../Pages/Categoria'


const Rutas = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/categories/:category" element={<Categoria />} />
                <Route path='/producto/:id' element={<Detalle />} />
            </Routes>
        </div>
    )
}

export default Rutas