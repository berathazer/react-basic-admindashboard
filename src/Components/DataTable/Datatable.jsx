import "./datatables.scss";

import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";


const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            src={`https://picsum.photos/180`}
            alt="avatar"
            className="avatar"
          />
          {params.row.user}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "age",
    headerName: "Age",

    width: 120,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 180,
    sortable: false,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <div className="viewButton" id={params.row.id} >
            View
          </div>
          <div
            className="deleteButton"
            id={params.row.id}
           
          >
            Delete
          </div>
        </div>
      );
    },
  },
];

const userRows = [
  {
    id: 1,
    user: "Berat Hazer",
    email: "berathazer371@gmail.com",
    age: 20,
    status: "active",
  },

  {
    id: 2,
    user: "Berat Hazer",
    email: "berazer371@gmail.com",
    age: 40,
    status: "pending",
  },

  {
    id: 3,
    user: "Berat Hazer",
    email: "berathazer3@gmail.com",
    age: 25,
    status: "passive",
  },

  {
    id: 4,
    user: "Berat Hazer",
    email: "berath71@gmail.com",
    age: 22,
    status: "active",
  },
  {
    id: 5,
    user: "Berat Hazer",
    email: "berathazer371@gmail.com",
    age: 20,
    status: "active",
  },

  {
    id: 6,
    user: "Berat Hazer",
    email: "berazer371@gmail.com",
    age: 40,
    status: "pending",
  },

  {
    id: 7,
    user: "Berat Hazer",
    email: "berathazer3@gmail.com",
    age: 25,
    status: "passive",
  },

  {
    id: 8,
    user: "Berat Hazer",
    email: "berath71@gmail.com",
    age: 22,
    status: "active",
  },
  {
    id: 9,
    user: "Berat Hazer",
    email: "berathazer371@gmail.com",
    age: 20,
    status: "active",
  },

  {
    id: 10,
    user: "Berat Hazer",
    email: "berazer371@gmail.com",
    age: 40,
    status: "pending",
  },

  {
    id: 11,
    user: "Berat Hazer",
    email: "berathazer3@gmail.com",
    age: 25,
    status: "passive",
  },

  {
    id: 12,
    user: "Berat Hazer",
    email: "berath71@gmail.com",
    age: 22,
    status: "active",
  },
];





const Datatable = () => {
  const [row, setRow] = useState([...userRows]);


  return (
    <div className="datatable">
      <div className="addNew"><Link to={"/users/new"} className="button">Add New</Link></div>
      <DataGrid
        rows={row}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
