import React, { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext/'
import Button from '../../components/Button/Button'
import '../Cart/StyleCartDetail.css'



const CartDetail = () => {
    const { cart, removeItem, clear } = useContext(CartContext)
    console.log(cart.length)

    // const notify = () => {
    //     toast.success("Producto eliminado", { position: toast.POSITION.TOP.CENTER })
    // }


    return (
        <div>
            CART
            {
                cart.map(el => (
                    <div className="cart-detail" key={el.item.id}>
                        <p>Producto: {el.item.title}</p>
                        <p>Cantidad: {el.q}</p>
                        <p>Precio: {el.item.price}</p>
                        <Button cb={() => {removeItem(el.item.id)}
                        } text="Eliminar" />

                    </div>

                ))
            }

            <Button cb={() => clear()} text="Eliminar carrito" />
        </div>
    )
}

export default CartDetail