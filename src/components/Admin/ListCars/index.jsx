import React from "react";
import PropTypes from "prop-types";
import Tables from "./tables";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "features/Product/productSlice";
import productsApi from "api/productsApi";

ListCars.propTypes = {};

ListCars.defaultProps = {};
function ListCars(props) {
  const dataCar = useSelector((state) => state.products);
  
  const dispatch = useDispatch();
  function handleDataCar(values){
      const action = removeCar(values);
      productsApi.delete(values);
      dispatch(action);
  }
  return (
    <div>
      <h1>LIST CARS</h1>
      <Tables dataCar={dataCar} onReveicesDataCar={handleDataCar}/>
      
    </div>
  );
}

export default ListCars;
