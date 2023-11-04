
import React, { useState } from 'react';
import Button from '../Button/Button';
import ButtonCart from '../Button/ButtonCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = ({ onAdd, onRemove, text = "Agregar al carrito", q = 1, isCartItem = false, itemId, stock }) => {
  const [count, setCount] = useState(q);

  const increment = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };

  const decrement = () => { //funcion anterior para restar
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const notify = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleButtonClick = () => {
    if (isCartItem) {
      onRemove(itemId);
      notify('El producto se eliminó del carrito');
    } else {
      onAdd(count);
      notify('El producto se envió al carrito');
    }
  };
  const deletOne = () => {
    if (count > 1) {
      onAdd(-1);
      setCount(count - 1)
    }else{
      console.log(count)
    }

  };

  const addOne = () => {
    if (count < stock) {
      onAdd(1);
      setCount(count + 1)
    }else{
      console.log(count)
    }
  };


  return (
    <div>
      <Button cb={addOne} text="+" />
      <span> {count} </span>
      <Button cb={deletOne} text="-" />
      <div>
        <ButtonCart cb={handleButtonClick} text={text} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Counter;


