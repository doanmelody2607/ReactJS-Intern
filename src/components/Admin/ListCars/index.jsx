import React, { useEffect, useState } from "react";
import Tables from "./tables";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCarList,
  removeCar,
  searchCar,
} from "features/Product/productSlice";
import productsApi from "api/productsApi";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

ListCars.propTypes = {};

ListCars.defaultProps = {};
function ListCars(props) {
  const dataCar = useSelector((state) => state.products);
  console.log("data car", dataCar);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const [dataxx, setDataxx] = useState(() => {
    return [];
  });
  useEffect(() => {
    setDataxx(dataCar);
  }, [dataCar]);

  function handleDeleteCar(values) {
    const action = removeCar(values);
    dispatch(action);

    productsApi.delete(values);
  }

  function handleEditCar(values) {
    history.push(`${match.url}/${values}`);
  }

  function handleSearch(e) {
    const find = e.target.value;
    const searchResult = dataCar.filter(
      (car) =>
        car.name.toLowerCase().includes(find.toLowerCase(), -2) ||
        car.price.toLowerCase().includes(find.toLowerCase(), -2)
    );
    setDataxx(searchResult);
  }

  function handleCreateCar() {
    history.push(`/admin/create`);
  }

  return (
    <div>
      <h1>LIST CARS</h1>
      <TextField
        id="filled-full-width"
        style={{ margin: 0 }}
        placeholder="Seacrh"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        onKeyUp={handleSearch}
      />
      <Tables
        dataCar={dataxx}
        onReceiveDeleteCar={handleDeleteCar}
        onReceiveEditCar={handleEditCar}
      />
      <br />
      <Button onClick={handleCreateCar} variant="contained" color="secondary">
        Add Product
      </Button>
    </div>
  );
}

export default ListCars;
