import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import productsApi from "api/productsApi";
import {
  removeCar
} from "features/Product/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./table.scss";
import Tables from "./tables";

ListCars.propTypes = {};

ListCars.defaultProps = {};
function ListCars(props) {
  const dataCar = useSelector((state) => state.products);
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
    <div className="listcars">
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
