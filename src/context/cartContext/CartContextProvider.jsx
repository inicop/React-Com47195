import React from 'react'
import CartContex from './CartContext'
import { useState } from "react"


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, q) => {
        const elPrev = isInCart(item.id);

        if (elPrev) {
            const newCart = cart.map((el) => {
                if (el.id === elPrev.id) {
                    el.quantity = el.quantity + q;
                    el.price = item.price * el.quantity; // Calcula el precio correctamente
                    return el;
                }
                return el;
            });
            setCart(newCart);
        } else {
            setCart([
                ...cart,
                {
                    ...item,
                    quantity: q,
                    price: item.price * q, // Calcula el precio al agregar un nuevo elemento
                }
            ]);
        }
    };


    const isInCart = (id) => {
        const element = cart.find((el) => el.id === id)
        console.log(element)
        return element
    };



    const removeItem = (id) => {
        const newCart = cart.filter((el) => el.item.id !== id);
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }


    const getTotalCost = () => {
        let totalCost = 0;
        cart.forEach((cartItem) => {
            totalCost += cartItem.price;
        });
        return totalCost;
    };


    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        getTotalCost,

    }
    return (
        <CartContex.Provider value={values}>
            {children}
        </CartContex.Provider>
    )
}

export default CartContextProvider