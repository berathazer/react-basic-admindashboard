import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 1516445,
    product: "Acer Nitro 5",
    customer: "Berat Hazer",
    date: "1 March",
    amount: 768,
    payment: 1, // 1 online 0 cash
    status: 1, //1 approved  0 pending
  },

  {
    id: 1516444,
    product: "Playstation 5",
    customer: "John Abruzzi",
    date: "11 March",
    amount: 1200,
    payment: 1, // 1 online 0 cash
    status: 0, //1 approved  0 pending
  },
  {
    id: 1516443,
    product: "Acer Nitro 5",
    customer: "Berat Hazer",
    date: "1 March",
    amount: 768,
    payment: 1, // 1 online  0 cash on delivery
    status: 0, //1 approved  0 pending
  },

  {
    id: 151642,
    product: "Acer Nitro 5",
    customer: "Berat Hazer",
    date: "1 March",
    amount: 768,
    payment: 1, // 1 online  0 cash on delivery
    status: 0, //1 approved  0 pending
  },

  {
    id: 1516441,
    product: "Acer Nitro 5",
    customer: "Berat Hazer",
    date: "1 March",
    amount: 768,
    payment: 1, // 1 online  0 cash on delivery
    status: 0, //1 approved  0 pending
  },

  {
    id: 1516440,
    product: "Acer Nitro 5",
    customer: "Berat Hazer",
    date: "1 March",
    amount: 768,
    payment: 1, // 1 online  0 cash on delivery
    status: 0, //1 approved  0 pending
  },
];

const ListTable = ({title}) => {
  return (
    <div className="table">
       {title ? <div className="title">{title}</div> :  ""}
      <TableContainer component={Paper}>
      
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Methods</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={`https://picsum.photos/`+Math.floor(Math.random()*200)} 
                    alt=""
                    className="avatar"
                  />
                  <span style={{marginLeft:"10px"}}>{row.product}</span>
                </TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>

                <TableCell>
                    <div className={`payment ${row.payment ? "online" : "cash" }`}>
                    {row.payment ? "Online" : "Cash on Delivery" }
                    </div>
                    
                    </TableCell>
                <TableCell>
                    <div className={`status ${row.status ? "approved" : "pending" }`}>
                        {row.status ? "Approved" : "Pending" }
                    </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListTable;
