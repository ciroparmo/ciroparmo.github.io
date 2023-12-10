import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import "./itemListContainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/data/productos.js");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, 300);
  }, []);

  return (
    <>
      {!products.length ? (
        <div>
          <span>Cargando...</span>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;