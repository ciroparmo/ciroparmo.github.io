import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"

const ItemList = ({products}) => {
  return (
    <div className='containerItems'>
      {products.map((product) =>(
        <Item key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ItemList;