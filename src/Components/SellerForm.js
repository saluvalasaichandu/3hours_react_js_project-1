import React, { useState } from "react";
import Input from './SellerInputForm.js';
import Select from './SellerSelect.js';
const Form = (props) => {
  const [productID, setProductID] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const productIDchangeHandler = (event) => {
    setProductID(event.target.value);
  };
  const sellingPriceChangeHandler = (event) => {
    setSellingPrice(event.target.value);
  };
  const productNameChangeHandler = (event) => {
    setProductName(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let product = {
      id: productID,
      price: sellingPrice,
      name: productName,
      category: category,
    };
    props.onAddProducts(product);
  };
  return (
    <form onSubmit={formSubmitHandler} >
      <Input
        type="number"
        id="productId"
        label="Product ID"
        onChange={productIDchangeHandler}
      ></Input>
      <Input
        type="number"
        id="price"
        label="Selling Price"
        onChange={sellingPriceChangeHandler}
      ></Input>
      <Input
        type="text"
        id="name"
        label="Product Name"
        onChange={productNameChangeHandler}
      ></Input>
      <Select
        id="itemType"
        label="Choose a category"
        onChange={categoryChangeHandler}
      ></Select>
      <button type="submit">Add Product</button>
    </form>
  );
};
export default Form;