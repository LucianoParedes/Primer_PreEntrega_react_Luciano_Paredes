import { useState, useEffect } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import ItemList from "../../Components/ItemList/ItemList";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductList(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Item list container</h1>
      <ItemCount />
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
