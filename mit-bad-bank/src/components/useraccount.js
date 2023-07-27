// Importing necessary modules and components
import { useState } from "react"; // Importing the 'useState' hook from React
import { Button } from "@mui/material"; // Importing the 'Button' component from the '@mui/material' library


import Avatar from "./avatar"; // Importing the 'Avatar' component from './Avatar'
import Transactions from "./transactions"; // Importing the 'Transactions' component 
import useUserContext from "../data/useContext"; // Importing the custom 'useUserContext' 
import getTotal from "../data/total"; // Importing the 'getTotal' function '
import UpdateProfilePopUp from "../popupwindows/updateprofile"; // Importing the 'UpdateProfilePopUp' component 
import Chart from "./chart"; // Importing the 'Chart' component from './chart'

// Defining the 'UserAccount' component
const UserAccount = () => {
  const { loggedInUser } = useUserContext(); // Using the 'useUserContext' hook to get the 'loggedInUser' data
  const [isUpdatePopUpOpen, setIsUpdatePopUpOpen] = useState(false); // Using the 'useState' hook to manage the state of 'isUpdatePopUpOpen'

  // Calculating the total deposits and total withdraws from 'loggedInUser.transactionHistory'
  const totalDeposits = getTotal("Deposit", loggedInUser.transactionHistory);
  const totalWithdraws = getTotal("Withdraw", loggedInUser.transactionHistory);

  // Setting up the 'transactionData' state using the 'useState' hook, initializing it with the calculated data
  const [transactionData, setTransactionData] = useState({
    labels: ["Total Amount Deposits", "Total Amount Withdraws"],
    datasets: [
      {
        label: "Total",
        data: [totalDeposits, totalWithdraws],
        backgroundColor: ["rgba(24, 143, 0, 0.5)", "rgba(255, 136, 0, 0.5)"],
        borderColor: ["rgb(5, 192, 192)", "rgb(255, 99, 132)"],
        borderWith: 2,
      },
    ],
  });

  // Function to toggle the 'isUpdatePopUpOpen' state when the 'Edit Profile Info' button is clicked
  const toggleUpdate = () => {
    setIsUpdatePopUpOpen((prev) => !prev);
  };

  // JS markup for the UserAccount component
  return (
    <>
      {/* Displaying the user's avatar */}
      <Avatar image={loggedInUser.userPic} />
      <div className="userInfo-container">
        <h5>{loggedInUser.name}</h5>
        <h6>Current Balance</h6>
        <h6>{loggedInUser.balance}€</h6>
        {/* Button to edit profile information */}
        <Button style={{ position: "static" }} onClick={toggleUpdate}>
          Edit Profile
        </Button>
      </div>
      <div className="report-container">
        <div>
          <h5>Transactions</h5>
          {/* Rendering the 'Transactions' component */}
          <Transactions />
        </div>

        <div className="chart-container">
          {/* Rendering the 'Chart' component and passing the 'transactionData' */}
          <Chart chartData={transactionData} />
        </div>
      </div>

      {/* Conditionally rendering the 'UpdateProfilePopUp' component when 'isUpdatePopUpOpen' is true */}
      {isUpdatePopUpOpen && <UpdateProfilePopUp handleClose={toggleUpdate} />}
    </>
  );
};

// Exporting the 'UserAccount' component as the default export
export default UserAccount;
