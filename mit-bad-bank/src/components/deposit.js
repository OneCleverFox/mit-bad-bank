// Import React hooks and libraries
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Box } from "@mui/material";
import { toast } from "react-toastify";

// Import function
import useUserContext from "../data/useContext";
import createTransaction from "../data/transaction";

// Define the Deposit component
const Deposit = () => {
  // Define state variables
  const [isDisabled, setIsDisabled] = useState(true);
  const { user, setUser, loggedInUser, setLoggedInUser } = useUserContext();
  const [balance, setBalance] = useState();

  // Define validation schema
  const validationSchema = yup.object({
    depositAmount: yup
      .number()
      .min(1, "Must be greater or equal than 1€ due to the charges")
      .required("Deposit Amount is required")
      .typeError("The deposit amount must be a number"),
  });

  // Create Formik instance
  const formik = useFormik({
    initialValues: {
      depositAmount: "",
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      // Verify if there's a logged-in user
      if (!loggedInUser) {
        toast.error("Please login to make a successful transaction");
        return;
      }

      // Process deposit transaction
      const depAmount = parseFloat(formik.values.depositAmount);
      let newBalance = 0;
      const newData = user.map((u) => {
        if (u.email === loggedInUser.email) {
          u.balance += depAmount;
          newBalance = u.balance;
          const newTransaction = createTransaction("Deposit", depAmount);
          u.transactionHistory.push(newTransaction);
          setBalance(u.balance);
        }
        return u;
      });

      // Update user data and logged-in user balance
      setUser(newData);
      setLoggedInUser((prev) => ({ ...prev, balance: newBalance }));

      // Reset the form and show success toast
      formik.resetForm();
      toast.success("Deposit successful");
      return;
    },
  });

  // Get initial balance when logged-in user changes
  useEffect(() => {
    if (loggedInUser) {
      setBalance(loggedInUser.balance);
    }
  }, [loggedInUser]);

  // Listen for changes in formik values to enable/disable the Deposit button
  useEffect(() => {
    const { depositAmount } = formik.values;

    if (depositAmount.trim().length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.values]);

  // Custom styles for the component
  const customStyles = {
    width: "fit-content",
  };

  return (
    <>
      {/* Conditionally render content based on whether a user is logged in or not */}
      {!loggedInUser ? (
        <>
          <h3>Deposit</h3>
          <p>Please login to your account</p>
        </>
      ) : (
        <div className="card" style={customStyles}>
          <div className="card-body">
            <div className="row">
              <h4>Deposit</h4>
              <h5 className="card-title">
                Balance <span>{balance}€</span>
              </h5>
            </div>
            <div>
              <Box m={2}>
                <TextField
                  className="text-box custom-input-box"
                  id="depositAmount"
                  name="depositAmount"
                  label="Deposit Amount"
                  value={formik.values.depositAmount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.depositAmount &&
                    Boolean(formik.errors.depositAmount)
                  }
                  helperText={
                    formik.touched.depositAmount && formik.errors.depositAmount
                  }
                />
              </Box>
              <Box m={2}>
                <Button
                  variant="contained"
                  onClick={formik.handleSubmit}
                  disabled={isDisabled}
                >
                  Deposit
                </Button>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Deposit;
