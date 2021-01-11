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
    { field: "username", headerName: "Username", width: 200 },
    { field: "password", headerName: "Password", width: 200 },
    
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
            title: "Are you sure delete this user?",
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
