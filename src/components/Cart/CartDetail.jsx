import React, { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext/'
import Button from '../../components/Button/Button'

const CartDetail = () => {
    const { cart, removeItem } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            CART
            {
                cart.map(el => (
                    <div>
                        <p>Product: {el.item.title}</p>
                        <p>Cantidad: {el.q}</p>
                        <Button cb={()=> removeItem(el.item.id)} text ="Eliminar"/> 
                    </div>
                ))
            }
        </div>
    )
}

export default CartDetail