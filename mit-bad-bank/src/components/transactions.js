// Importing the necessary dependencies
import Table from "@mui/material/Table"; // Material-UI Table component
import TableBody from "@mui/material/TableBody"; // Material-UI TableBody component
import TableCell from "@mui/material/TableCell"; // Material-UI TableCell component
import TableContainer from "@mui/material/TableContainer"; // Material-UI TableContainer component
import TableHead from "@mui/material/TableHead"; // Material-UI TableHead component
import TableRow from "@mui/material/TableRow"; // Material-UI TableRow component
import Paper from "@mui/material/Paper"; // Material-UI Paper component


import useUserContext from "../data/useContext"; // Custom hook to access user context

// Functional component to display user transactions
const Transactions = () => {
  // Access the user context to get the logged-in user's data
  const { loggedInUser } = useUserContext();

  // Mapping the transaction history of the logged-in user
  const transactionList = loggedInUser?.transactionHistory?.map(
    (transaction, i) => {
      return (
        <TableRow
          key={i}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {transaction.date}
          </TableCell>
          <TableCell align="right">{transaction.type}</TableCell>
          <TableCell align="right">{transaction.amount}</TableCell>
        </TableRow>
      );
    }
  );

  // Rendering the component based on whether the user is logged in or not
  return (
    <>
      {!loggedInUser ? ( // If user is not logged in, show a message to log in
        <p>Please login to your account</p>
      ) : (
        // If user is logged in, show the transaction table
        <TableContainer component={Paper} className="custom-table">
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            {transactionList.length === 0 ? ( // If there are no transactions, show a message
              <>
                <TableBody>
                  <TableRow>
                    <TableCell>No Transactions</TableCell>
                  </TableRow>
                </TableBody>
              </>
            ) : (
              // If there are transactions, show the transaction list
              <TableBody>{transactionList}</TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Transactions; // Exporting the component as the default export
