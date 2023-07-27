// Import the 'useUserContext' 
import useUserContext from "../data/useContext";

// Import required components from '@mui/material' library
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Define the 'AllData' component
const AllData = () => {
  // Access the 'user' object using the 'useUserContext' hook
  const { user } = useUserContext();

  // Map through the 'user' array and create a 'TableRow' for each user
  const usersList = user.map((user, i) => {
    return (
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">{user.password}</TableCell>
        <TableCell align="right">{user.balance}€</TableCell>
      </TableRow>
    );
  });

  // Return the content of the component
  return (
    <>
      {/* Heading */}
      <h1>AllData</h1>
      <br />
      {/* TableContainer for Paper */}
      <TableContainer component={Paper}>
        {/* Table */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* TableHead */}
          <TableHead>
            <TableRow>
              {/* Table Headers */}
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Balance</TableCell>
            </TableRow>
          </TableHead>
          {/* TableBody containing the mapped 'usersList' */}
          <TableBody>{usersList}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

// Export the 'AllData' component as the default export
export default AllData;
