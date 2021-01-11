import React from "react";
import ControlCarousel from "components/Carousel";
import Products from "features/Product/Main";

import { useSelector } from "react-redux";

const Homepage = (props) => {
  // const listcars = useSelector((state) => state.products);

  return (
    <div>
      <ControlCarousel />
      <br />
      <Products />
      <br />
    </div>
  );
};

export default Homepage;
