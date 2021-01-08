import { CellParams, ColDef, DataGrid, GridApi } from "@material-ui/data-grid";
import * as React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
import { useState } from "react";

function tables(props) {
  const { dataCar,onReveicesDataCar } = props;
  const rows = dataCar;

  const columns: ColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Dscription", width: 130 },
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
            }
          });
        };
        return (
          <span>
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
