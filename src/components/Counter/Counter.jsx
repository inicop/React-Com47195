import React from 'react'
import Button from '../Button/Button'
import { useState } from 'react'


const Counter = () => {
  const [count, setCount] = useState (0)
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
      <Button cb ={increment} text="+"/>
      <span> {count} </span>
      <Button cb ={decrement} text="-"/>
    </div>
  )
}
export default Counter