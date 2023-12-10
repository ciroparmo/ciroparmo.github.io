import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({productId}) => {

  const [product, setProduct] = useState(null)

  const {idProduct} = useParams()

  useEffect(() => {
    setTimeout(() => {
      const fetchData = () => {
        return fetch("/data/productos.js")
        .then((response)=>response.json())
        .then((data) => {
          const foundProduct = data.find((item) => item.id == idProduct)
          setProduct(foundProduct)
        })
        .catch((error)=>console.log(error))
      }
  
      fetchData()
    }, 300)
  },[idProduct])

  return (
    <div>
      {
        product ? <ItemDetail product={product}/> : <p>Cargando...</p>
      }
    </div>
  );
};

export default ItemDetailContainer;