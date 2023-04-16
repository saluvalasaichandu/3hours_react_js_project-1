import React from "react";
import SellerItem from './SellerItem';
const List = (props) => {
  return (
    <div>
      <h1>Products</h1>
      <h2>Electronic Items</h2>
      <ul>
        {props.products.map(
          (product) =>
            product.category === "Electronic Item" && (
              <SellerItem
                price={product.price}
                name={product.name}
                category={product.category}
                id={product.id}
                key={product.id}
                delete={props.onDelete}
              />
            )
        )}
      </ul>
      <h2>Food Items</h2>
      <ul>
        {props.products.map(
          (product) =>
            product.category === "Food Items" && (
              <SellerItem
                price={product.price}
                name={product.name}
                category={product.category}
                id={product.id}
                key={product.id}
                delete={props.onDelete}
              />
            )
        )}
      </ul>
      <h2>SkinCare Items</h2>
      <ul>
        {props.products.map(
          (product) =>
            product.category === "SkinCare Items" && (
              <SellerItem
                price={product.price}
                name={product.name}
                category={product.category}
                id={product.id}
                key={product.id}
                delete={props.onDelete}
              />
            )
        )}
      </ul>
    </div>
  );
};
export default List;