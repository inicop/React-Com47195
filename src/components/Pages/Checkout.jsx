import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
    const { orderId } = useParams()
    return (
        <div className="container mt-2 bg-body-tertiary">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-1 text-white bg-dark p-1" style={{ fontSize: '50px', fontFamily: 'Open Sans' }}> CHECKOUT</h1>
                    <div>
                        <p>Gracias por su compra! <br/> 
                        Se creó la orden número <strong>{orderId}</strong><br/>
                        Recibirá un correo electrónico para dar seguimiento a su compra.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout