import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext/'
import Button from '../../components/Button/Button'
import '../Cart/StyleCartDetail.css'
import { addDoc, getFirestore, collection } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const CartDetail = () => {

    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })


    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear, getTotalCost } = useContext(CartContext)
    //const getTotalCost = useContext(CartContext).getTotalCost;
    const navigate = useNavigate() // redirecciona a otro componente 
    
    const addToCart = () => {
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            amount: getTotalCost()
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then(res => navigate(`/checkout/${res.id}`))
            .catch(err => console.log(err))
        console.log(purchase)
    }

    const handleChange = (e) => {
        const { target } = e;
        setBuyer({ ...buyer, [target.name]: target.value })
        console.log(buyer)
    }

    const onSubmit = () => {
        // validación
        e.preventDefault()
        const erros = {};
        if (buyer.name) {
            erros.name = "el nombre es obligatorio"
        }

        addToCart();
    }

    return (
        <div>
            <div className="formtype">
                <div>
                    <label htmlFor='name'>Ingrese su nombre </label>
                    <input onChange={handleChange} type="text" name='name' id='name' value={buyer.name} />
                </div>
                <div>
                    <label htmlFor='email' > Ingrese su email </label>
                    <input onChange={handleChange} type="text" name='email' id='email' value={buyer.email} />
                </div>
                <p> Total:{getTotalCost()}  </p>
            </div>


            {
                cart.map(el => (
                    <div className="cart-detail" key={el.id}>
                        <p>Producto: {el.title}</p>
                        <img src={el.image} />
                        <p>Cantidad: {el.quantity}</p>
                        <p>Precio: {el.price}</p>
                        <Button cb={() => { removeItem(el.id) }} text="Eliminar" />
                    </div>

                ))
            }
            {
                cart.length > 0 && (
                    <div className="button-container">
                        <Button cb={() => { addToCart(); clear() }} text="Crear Orden" />
                        <Button cb={() => clear()} text="Eliminar carrito" />
                    </div>
                )
            }


        </div >
    )
}

export default CartDetail