import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext/'
import Button from '../../components/Button/Button'
import '../Cart/StyleCartDetail.css'
import { addDoc, getFirestore, collection } from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartDetail = () => {
    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear } = useContext(CartContext)
    const addToCart = () => {
        const purchase = {
            buyer: {
                id: 1,
                name: "Richard Medina",
                mail: "rmedina@gmail.com"
            },
            items: cart,
            date: new Date(),
            amount: 1000
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then(res => {
                setOrderId(res.id)
            })
            .catch(err => console.log(err))
        console.log(purchase)
    }
    const notify = () => toast.success("Orden creada carrectamente " + orderId);

    return (
        <div>
            {
                cart.map(el => (
                    <div className="cart-detail" key={el.item.id}>
                        <p>Producto: {el.item.title}</p>
                        <img src={el.item.image} />
                        <p>Cantidad: {el.q}</p>
                        <p>Precio: {el.item.price}</p>
                        <Button cb={() => { removeItem(el.item.id) }} text="Eliminar" />
                    </div>

                ))
            }
            {
                cart.length > 0 && (
                    <div className="button-container">
                        <Button cb={() => { addToCart(); clear() }} text="Crear Orden" />
                        <ToastContainer />
                        <Button cb={() => clear()} text="Eliminar carrito" />
                    </div>
                )}
            {
                orderId && (
                    < div >
                        <span> Se creo la orden de compra número: {orderId}, revisa tu bandeja de correo electrónico para darle seguimiento.</span>
                    </div>
                )}

        </div >
    )
}

export default CartDetail