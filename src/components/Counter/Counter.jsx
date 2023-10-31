import React from 'react'
import Button from '../Button/Button'
import ButtonCart from '../Button/ButtonCart'
import { useState } from 'react'


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

  return (
    <div>
      <Button cb={increment} text="+" />
      <span> {count} </span>
      <Button cb={decrement} text="-" />
      <div>
        <ButtonCart cb={() => onAdd(count)} text="Agregar al Carrito" />
      </div>

    </div>
  )
}
export default Counter