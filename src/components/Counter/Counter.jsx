import React from 'react'
import Button from '../Button/Button'
import ButtonCart from '../Button/ButtonCart'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Counter = ({ onAdd }) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const notify = ()=> toast.success('El producto se envió al carro', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  return (
    <div>
      <Button cb={increment} text="+" />
      <span> {count} </span>
      <Button cb={decrement} text="-" />
      <div>
        <ButtonCart cb={() => {onAdd(count); notify();}} text="Agregar al Carrito" />
        <ToastContainer/>
      </div>

    </div>
  )
}
export default Counter