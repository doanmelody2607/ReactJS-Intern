import ControlCarousel from "components/Carousel";
import Products from "features/Product/Main";
import React from "react";


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
