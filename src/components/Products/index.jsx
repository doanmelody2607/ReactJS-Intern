import React from "react";
import Product from "./product";
import './Products.scss';

function Products(props) {
  const { products, onAdd } = props;

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </div>
  );
}

export default Products;
