// Import required dependencies and hooks from React and other packages
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Button, TextField, Box } from "@mui/material";
import { toast } from "react-toastify";



// Import the custom user context hook
import useUserContext from "../data/useContext";




// Define the LoginPopUp component, which takes a handleClose prop
const LoginPopUp = ({ handleClose }) => {
  // State hook to manage the 'isDissabled' state
  const [isDissabled, setIsDisabled] = useState(true);

  // Access user data and setLoggedInUser function from the custom user context hook
  const { user, setLoggedInUser } = useUserContext();

  // Get the navigate function from react-router-dom for programmatic navigation
  const navigate = useNavigate();

  // Define the validation schema for the form using Yup
  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  // Use useFormik hook to handle form state, validation, and submission
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      // Find the user with the entered email in the 'user' array
      const targetUser = user.find((user) => user.email === formik.values.email);

      // If the user doesn't exist, show an error toast
      if (!targetUser) {
        toast.error("User does not exist");
        return;
      }

      // Validate the entered password against the target user's password
      if (targetUser.password !== formik.values.password) {
        toast.warn("Invalid credentials");
        return;
      }

      // If the login is successful, set the loggedInUser state with the targetUser data
      setLoggedInUser(targetUser);

      // Reset the form, close the popup, navigate to the '/myAccount' route, and show a success toast
      formik.resetForm();
      handleClose();
      navigate("/myAccount");
      toast.success(`Welcome, ${targetUser.name}!`);
      return;
    },
  });

  // useEffect hook to listen for changes in formik values (email and password)
  useEffect(() => {
    // Extract email and password values from formik
    const { email, password } = formik.values;

    // Enable or disable the login button based on whether email and password are non-empty
    if (email.trim().length > 0 && password.trim().length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.values]);

  // Styles for the cancel button
  const cancelButtonStyles = {
    backgroundColor: "#495057",
  };

  // Return the JSX for the LoginPopUp component
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              {/* Display the heading 'Login' */}
              <span className="">Login</span>
              <hr />
              <div>
                <Box m={2}>
                  {/* Email input field */}
                  <TextField
                    className="text-box custom-input-box"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>

                <Box m={2}>
                  {/* Password input field */}
                  <TextField
                    className="text-box custom-input-box"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Box>

                <Box m={2} className="custom-btn-group">
                  {/* Cancel button */}
                  <Button
                    variant="contained"
                    style={cancelButtonStyles}
                    type="submit"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>

                  {/* Login button */}
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={formik.handleSubmit}
                    disabled={isDissabled}
                  >
                    Login
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the LoginPopUp component
export default LoginPopUp;
