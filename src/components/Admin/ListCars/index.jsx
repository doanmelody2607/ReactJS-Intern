import React from "react";
import PropTypes from "prop-types";
import Tables from "./tables";
import { useSelector } from "react-redux";

ListCars.propTypes = {};

ListCars.defaultProps = {};
function ListCars(props) {
  const dataCar = useSelector((state) => state.products);
  console.log('1', typeof dataCar);
  
  return (
    <div>
      <h1>LIST CARS</h1>
      <Tables dataCar={dataCar} />
      
    </div>
  );
}

export default ListCars;
