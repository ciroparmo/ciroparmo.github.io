import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./item.css"
import { Link } from 'react-router-dom';

const Item = ({product}) => {

  const onAdd = (quantity) => {
    alert(quantity)
  }

  return (
    <>
        <div id='containerItem'>
          <div id='containerImg'>
          <Link to={`/item/${product.id}`}>
          <img className='img' src={product.img} alt="" />
          </Link>
          </div>
          <div id="containerInfo">
            <h1 id='name'>{product.nombre}</h1>
            <p id='price'>{product.precio}$</p>
            <p id='description'>{product.descripcion}</p>
            <p id='stock'>Stock: {product.stock}</p>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
          </div>
        </div>
    </>

  );
};

export default Item;