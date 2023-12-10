import React, {useState} from 'react';
import "./itemCount.css"

const ItemCount = ({initial,stock,onAdd}) => {

  const [count, setCount] = useState(initial)

  const increment = () => {
    if(count<stock) {
      setCount(count+1)
    }
  }
  
  const decrement = () => {
    if(count>initial) {
      setCount(count-1)
    }
  }

  return (
    <div className='containerCount'>
      <div className='containerButtons'>
        <button onClick={increment}>Incrementar</button>
        <div className='containerNumber'>
          <span className='countNumber'>{count}</span>
        </div>
        <button onClick={decrement}>Disminuir</button>
      </div>
      <button onClick={() => {onAdd(count)}}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;