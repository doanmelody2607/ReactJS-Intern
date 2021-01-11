import { CellParams, ColDef, DataGrid, GridApi } from "@material-ui/data-grid";
import * as React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
import "./table.scss";

function tables(props) {
  const { dataCar, onReceiveDeleteCar, onReceiveEditCar } = props;
  const rows = dataCar;

  const columns: ColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 130 },
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
            }
          });
        };
        return (
          <span className="icon-action">
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
