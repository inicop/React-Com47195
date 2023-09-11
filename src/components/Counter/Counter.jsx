import React from 'react'
import Button from '../Button/Button'

const Counter = ({ count, sumar, restar }) => {

  return (
    <div>
      <p>Valor: {count}</p>
      <Button text="+" cb={sumar} />
      <Button text="-" cb={restar} />

    </div>
  )
}
export default Counter