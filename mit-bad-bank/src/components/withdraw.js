// Importing necessary dependencies and hooks from React
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

// Importing the helping functions
import createTransaction from "../data/transaction";
import useUserContext from "../data/useContext";

// Importing necessary components from MUI (Material-UI)
import { Button, TextField, Box } from "@mui/material";

const Withdraw = () => {
  // State variables
  const [isDisabled, setIsDisabled] = useState(true);
  const { user, setUser, loggedInUser, setLoggedInUser } = useUserContext();
  const [balance, setBalance] = useState();

  // Validation schema for the form using 'yup' library
  const validationSchema = yup.object({
    withdrawAmount: yup
      .number()
      .min(1, "Must be greater or equal than 1€")
      .max(loggedInUser.balance, "Insufficient Funds")
      .required("Withdraw Amount is required")
      .typeError("The withdraw amount must be a number"),
  });

  // Formik hook for managing form state and validation
  const formik = useFormik({
    initialValues: {
      withdrawAmount: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      // Verify if there's a logged-in user
      if (!loggedInUser) {
        toast.error("Please login to make a successful transaction");
        return;
      }

      // Parsing the withdraw amount to a float number
      const witAmount = parseFloat(formik.values.withdrawAmount);

      // Check if the withdraw amount is greater than the user's balance
      if (witAmount > loggedInUser.balance) {
        toast.warn("Insufficient Funds");
        return;
      }

      let newBalance = 0;

      // Update the user's balance and transaction history
      const newData = user.map((u) => {
        if (u.email === loggedInUser.email) {
          u.balance -= witAmount;
          newBalance = u.balance;
          const newTransaction = createTransaction("Withdraw", witAmount);
          u.transactionHistory.push(newTransaction);
          setBalance(u.balance);
        }
        return u;
      });

      // Update the user's data and balance in the context
      setUser(newData);
      setLoggedInUser((prev) => ({ ...prev, balance: newBalance }));

      // Reset the form after successful submission
      formik.resetForm();

      // Show success toast message
      toast.success("Withdraw successful");
      return;
    },
  });

  // Get the initial balance when the loggedInUser changes
  useEffect(() => {
    if (loggedInUser) {
      setBalance(loggedInUser.balance);
    }
  }, [loggedInUser]);

  // Listen for formik values changes and enable/disable the 'Withdraw' button accordingly
  useEffect(() => {
    const { withdrawAmount } = formik.values;
    setIsDisabled(withdrawAmount.trim().length === 0);
  }, [formik.values]);

  // Custom styles for the MUI components
  const customStyles = {
    width: "fit-content",
  };

  return (
    <>
      {/* Render different content based on whether a user is logged in or not */}
      {!loggedInUser ? (
        <>
          <h3>Withdraw</h3>
          <p>Please login to your account</p>
        </>
      ) : (
        <div className="card" style={customStyles}>
          <div className="card-body">
            <div className="row">
              <h3>Withdraw</h3>
              <h5 className="card-title">
                Balance <span>{balance}€</span>
              </h5>
            </div>
            <div>
              <Box m={2}>
                <TextField
                  className="text-box custom-input-box"
                  id="withdrawAmount"
                  name="withdrawAmount"
                  label="Withdraw Amount"
                  value={formik.values.withdrawAmount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.withdrawAmount &&
                    Boolean(formik.errors.withdrawAmount)
                  }
                  helperText={
                    formik.touched.withdrawAmount &&
                    formik.errors.withdrawAmount
                  }
                />
              </Box>
              <Box m={2}>
                <Button
                  variant="contained"
                  onClick={formik.handleSubmit}
                  disabled={isDisabled}
                >
                  Withdraw
                </Button>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Withdraw;
