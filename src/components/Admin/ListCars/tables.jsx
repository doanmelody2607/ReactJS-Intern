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
<<<<<<< HEAD
    { field: "description", headerName: "Description", width: 200 },
=======
    { field: "description", headerName: "Description", width: 130 },
>>>>>>> 0b23bea1f2b7fe452c6ca7b76c04fc0cb8deb30f
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "origin",
      headerName: "Origin",
      width: 150,
    },
    {
      field: "thumbail",
      headerName: "Thumbail",
<<<<<<< HEAD
      width: 130,
=======
      width: 120,
>>>>>>> 0b23bea1f2b7fe452c6ca7b76c04fc0cb8deb30f

      renderCell: (params) => {
        return <img className="w-100" src={params.getValue("thumbail")} />;
      },
    },
    {
      field: "id",
      headerName: "Action",
      sortable: false,
      width: 130,
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
<<<<<<< HEAD
          <span className="icon-action ">
=======
          <span className="icon-action">
>>>>>>> 0b23bea1f2b7fe452c6ca7b76c04fc0cb8deb30f
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
