import React from 'react';
import "./itemDetail.css"
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {

  const onAdd = (quantity) => {
    alert(quantity)
  }

  return (
    <>
      <div className='containerItem'>
        <div className='containerImg'>
         <img className='img' src={product.img} alt="" />
        </div>
        <div className="containerInfo">
          <div>
          <h1 className='name'>{product.nombre}</h1>
          <p className='price'>{product.precio}$</p>
          <p className='description'>{product.descripcion}</p>
          <p className='stock'>Stock: {product.stock}</p>
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
          </div>
        </div>
      </div>
    </>

  );
};


export default ItemDetail;