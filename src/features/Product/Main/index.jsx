import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

function Main(props) {
  const products = useSelector((state) => state.products);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Main;
