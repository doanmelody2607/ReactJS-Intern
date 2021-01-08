import React from "react";
import PropTypes from "prop-types";

import MeterialTable from "material-table";
import { useState } from "react";
import { Table } from "@material-ui/core";

tables.propTypes = {
  dataCar: PropTypes.array,
};

tables.defaultProps = {
  dataCar: [],
};
function tables(props) {
  const { dataCar } = props;
  console.log("dataCar", dataCar);

  const datas = dataCar;

  //   console.log(typeof datas, typeof dataCar);
  //   console.log("data", datas);
  //   console.log("dataCar", dataCar);

  const cars = datas.map((data, index) => {
    return <p key={index}>{data.name}</p>;
  });

  return <div>{cars}</div>;
}

export default tables;
