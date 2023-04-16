import React, { useEffect, useState } from "react";
import Form from "./Components/SellerForm";
import List from "./Components/SellerList";
import './App.css'
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("orders")) {
      let data = localStorage.getItem("orders");
      setProducts(JSON.parse(data));
    }
  }, []);

  const addDataHandler = (props) => {
    setProducts((prevProducts) => {
      const arr = [
        ...prevProducts,
        {
          id: props.id,
          price: props.price,
          name: props.name,
          category: props.category,
        },
      ];
      localStorage.setItem("orders", JSON.stringify(arr));
      return arr;
    });
  };
  const deleteButtonHandler = (id) => {
    setProducts((prevProducts) => {
      let arr = prevProducts.filter((product) => product.id !== id);
      localStorage.setItem("orders", JSON.stringify(arr));
      return arr;
    });
  };
  return (
    <div className="app">
      <Form onAddProducts={addDataHandler}></Form>
      <List products={products} onDelete={deleteButtonHandler}></List>
    </div>
  );
}

export default App;