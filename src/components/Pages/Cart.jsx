import React from 'react'
import CartDetail from '../Cart/CartDetail/'

const Cart = () => {
  return (
    <>
      <div className= "container mt-2 bg-body-tertiary">
        <div className="row">
          <h1 className="display-1 text-center text-white bg-dark p-1" style={{ fontSize: '30px', fontFamily: 'Open Sans' }}> CARRO DE COMPRAS</h1>
        </div>
      </div>
      <CartDetail />
    </>
  )
}

export default Cart