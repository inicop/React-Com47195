import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext/'
import Button from '../../components/Button/Button'
import '../Cart/StyleCartDetail.css'
import { addDoc, getFirestore, collection } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import Counter from '../Counter/Counter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartDetail = (isCartItem = false) => {
    const [cartTotal, setCartTotal] = useState(0);
    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: ""
    })

    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear, getTotalCost, addItem } = useContext(CartContext)
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

    const onSubmit = (e) => {

        const errors = {};
        if (!buyer.name) {
            errors.name = "el nombre es obligatorio"
        }
        if (!buyer.email) {
            errors.email = "el email es obligatorio"
        }
        if (Object.keys(errors).length === 0) {
            addToCart()
            clear()
        } else {
            setErrors(errors)
            notifyWarn("Debe completar el nombre y el email")
        }
    }

    const notifyWarn = (message) => {
        toast.warn(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }




    const addOne = (count) => {

    }

    return (
        <div>
            <div className="formtype">
                <div>
                    <label className="etiquetaForm" htmlFor='name'>Ingrese su nombre </label>
                    <input onChange={handleChange} type="text" name='name' id='name' value={buyer.name} />
                </div>
                <div>
                    <label className="etiquetaForm" htmlFor='email' > Ingrese su email </label>
                    <input onChange={handleChange} type="text" name='email' id='email' value={buyer.email} />
                </div>
                <p>Total: USD {getTotalCost().toLocaleString().replace(/,/g, ".")}</p>
            </div>


            {
                cart.map(el => (
                    <div className="cart-detail" key={el.id}>
                        <p>Producto: {el.title}</p>
                        <img src={el.image} />
                        <p>Precio: USD {el.price.toLocaleString().replace(/,/g, ".")}</p>

                        <Counter
                            text="Eliminar"
                            q={el.quantity}
                            itemId={el.id}
                            onAdd={addItem} 
                            onRemove={removeItem}
                            isCartItem={true}
                        />

                        {//<Button cb={() => { removeItem(el.id) }} text="Eliminar" />/
                        }
                    </div>

                ))
            }
            {
                cart.length > 0 && (
                    <div className="button-container">
                        <Button cb={() => { onSubmit() }} text="Crear Orden" />
                        <Button cb={() => clear()} text="Eliminar carrito" />
                    </div>
                )
            }


        </div >
    )
}

export default CartDetail
