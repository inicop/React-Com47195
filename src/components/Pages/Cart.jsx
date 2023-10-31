import React from 'react'
import CartDetail from '../Cart/CartDetail/'

const Cart = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-1 text-white bg-dark p-1" style={{ fontSize: '50px', fontFamily: 'Open Sans' }}> CARRITO</h1>
        </div>
      </div>
      <CartDetail />
    </>
  )
}

export default Cart