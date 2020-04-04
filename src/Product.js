import React from "react";

const Product = props => {
  return (
    <div>
      <h1>Name: {props.product.name}</h1>
      <h2>Price: {props.product.price}</h2>
      <h3>Description: {props.product.description}</h3>
    </div>
  );
};

export default Product;
