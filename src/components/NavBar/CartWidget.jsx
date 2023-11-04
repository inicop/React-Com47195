import React from 'react'
import { BsCart3 } from "react-icons/bs"
import UserContext from '../../context/UserContext/'
import CartContext from '../../context/cartContext/CartContext/'
import { useContext } from 'react'


const CartWidget = () => {

    const {cart,getTotalCarrito} = useContext(CartContext)

    return (
        <>
            <div>
                <UserContext.Consumer>
                    {
                        ({ user }) => <p className = "Usuario" > Welcome,{user.name}</p>
                    }
                </UserContext.Consumer>
            </div>

            <div>
                < BsCart3 /> <span>{cart.length}</span>
            </div>
        </>
    )
}

export default CartWidget
