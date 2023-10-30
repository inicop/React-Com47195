import React from 'react'
import CartContex from './CartContext'
import { useState } from "react"


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);



    const addItem = (item, q) => {
        setCart([
            ...cart,
            {
                item, q
            }
        ])
    }
    const removeItem = (id) => {
        const newCart = cart.filter((el) => el.item.id !== id);
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear
    }
    return (
        <CartContex.Provider value={values}>
            {children}
        </CartContex.Provider>
    )
}

export default CartContextProvider