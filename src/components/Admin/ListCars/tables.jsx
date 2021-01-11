import { CellParams, ColDef, DataGrid, GridApi } from "@material-ui/data-grid";
import * as React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
<<<<<<< HEAD
import { useState } from "react";

function tables(props) {
  const { dataCar,onReveicesDataCar } = props;
=======
import "./table.scss";

function tables(props) {
  const { dataCar, onReceiveDeleteCar, onReceiveEditCar } = props;
>>>>>>> 89da79cc1ebf8fbb25ac7082ada46068c1b4ab34
  const rows = dataCar;

  const columns: ColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
<<<<<<< HEAD
    { field: "description", headerName: "Dscription", width: 130 },
=======
    { field: "description", headerName: "Description", width: 130 },
>>>>>>> 89da79cc1ebf8fbb25ac7082ada46068c1b4ab34
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 130,
    },
    {
      field: "origin",
      headerName: "Origin",
      width: 130,
    },
    {
      field: "thumbail",
      headerName: "Thumbail",
      width: 120,
<<<<<<< HEAD
    },
    {
      field: "type",
      headerName: "Type",
      width: 120,
    },
    {
      field: "id",
      headerName: "Action",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const handleEdit = () => {
          return alert(params.getValue("id"));
        };
        const handleDelete = () => {
          swal({
            title: "Are you sure delete this car?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {

              onReveicesDataCar(params.getValue("id"));
              swal("Done", {
                icon: "success",
              })
=======

      renderCell: (params) => {
        return (
          <img
            className="w-100"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/cla-250/mercedes-cla-250-2020.png"
          />
        );
      },
    },
    {
      field: "type",
      headerName: "Type",
      width: 120,
    },
    {
      field: "id",
      headerName: "Action",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const handleEdit = () => {
          onReceiveEditCar(params.getValue("id"));
        };
        const handleDelete = () => {
          swal({
            title: "Are you sure delete this car?",
            icon: "warning",
            dangerMode: true,
            buttons: true,
          }).then((willDelete) => {
            if (willDelete) {
              onReceiveDeleteCar(params.getValue("id"));
              swal("Done", {
                icon: "success",
                dangerMode: true,
              });
>>>>>>> 89da79cc1ebf8fbb25ac7082ada46068c1b4ab34
            }
          });
        };
        return (
<<<<<<< HEAD
          <span>
=======
          <span className="icon-action">
>>>>>>> 89da79cc1ebf8fbb25ac7082ada46068c1b4ab34
            {" "}
            <FaEdit onClick={handleEdit} />{" "}
            <AiFillDelete onClick={handleDelete} />{" "}
          </span>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
export default tables;
