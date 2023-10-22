import React from 'react'
import CartContex from './CartContext'
import { useState } from "react"

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log("CONTEXT", cart)

    const addItem = (item, q) => {
        setCart([
            ...cart,
            {
                item, q
            }
        ])
    }
    const removeItem = (id) =>{
        const newCart = cart.filter((el) => el.item.id !== id);
        setCart (newCart)
    }

    const values = {
        cart,
        addItem,
        removeItem
    }
    return (
        <CartContex.Provider value={values}>
            {children}
        </CartContex.Provider>
    )
}

export default CartContextProvider