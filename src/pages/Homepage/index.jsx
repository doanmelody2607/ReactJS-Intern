import React from "react";
import ControlCarousel from "components/Carousel";
import Products from "components/Products";
import data from '../../appData';

const Homepage = () => {
  const { products } = data;

  return (
    <div>
      <ControlCarousel />
      <br />
      <Products products={products}  />
      <br />
    </div>
  );
};

export default Homepage;
