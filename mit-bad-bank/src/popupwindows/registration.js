// Import necessary libraries and components
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import User from "../data/user";
import useUserContext from "../data/useContext";
import Avatar from "../components/avatar";


// Import validation library and components from MUI
import * as yup from "yup";
import { ref } from "yup";
import { Button, TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


// Define the RegisterPopUp component
const RegisterPopUp = ({ handleClose }) => {
  // Users context
  const { user, setUser } = useUserContext();
  const [isDisabled, setIsDisabled] = useState(true);
  const [otherAccount, setOtherAccount] = useState(false);

  // Registration validation schema using yup
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be at least 8 characters long")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Passwords do not match"),
  });

  // Formik hook for form handling
  const formik = useFormik({
    initialValues: {
      userPic: "/images/Avatar0.png",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      // Check if email is already in use
      const isDuplicate = user.find(
        (user) => user.email === formik.values.email
      );

      if (isDuplicate) {
        toast.error("Email already in use");
        return;
      }

      // Create a new user object using the User class
      const persona = new User();
      persona.userPic = formik.values.userPic;
      persona.name = formik.values.name;
      persona.email = formik.values.email;
      persona.password = formik.values.password;
      persona.balance = 0;
      persona.transactionHistory = [];

      // Update the user context with the new user
      setUser((prev) => [...prev, persona]);

      // Reset the form and toggle the otherAccount state
      formik.resetForm();
      setOtherAccount((prev) => !prev);

      // Show success toast message
      toast.success("Successful user registration");
      return;
    },
  });

  // Listen for Form inputs and enable/disable the Register button accordingly
  useEffect(() => {
    const { name, email, password, confirmPassword } = formik.values;

    if (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      password.trim().length > 0 &&
      confirmPassword.trim().length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.values]);

  // Handler to close the popup and reset the otherAccount state
  const handleClosePopUp = () => {
    handleClose();
    setOtherAccount(false);
  };

  // Handler to toggle the otherAccount state
  const handleClickYes = () => {
    setOtherAccount((prev) => !prev);
  };

  // Styles for the Cancel button
  const cancelButtonStyles = {
    backgroundColor: "#495057",
  };

  return (
    <>
      {/* Popup box */}
      <div className="popup-box">
        <div className="box">
          {otherAccount ? (
            /* Display when otherAccount state is true */
            <div className="card">
              <div className="card-body">
                <p>Would you like to add another account?</p>
                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    style={cancelButtonStyles}
                    type="submit"
                    onClick={handleClosePopUp}
                  >
                    No
                  </Button>

                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClickYes}
                  >
                    Yes
                  </Button>
                </Box>
              </div>
            </div>
          ) : (
            /* Display when otherAccount state is false */
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Register</h5>
                <hr />
                <div>
                  {/* Avatar section */}
                  <Box m={2}>
                    <Avatar image={formik.values.userPic} />
                  </Box>
                  <Box m={2}>
                    <FormControl className="custom-input-box">
                      <InputLabel id="userPicLabel">Avatar</InputLabel>
                      <Select
                        labelId="userPicLabel"
                        id="userPic"
                        name="userPic"
                        value={formik.values.userPic}
                        onChange={formik.handleChange}
                        label="Avatar"
                      >
                        {/* Avatar options */}
                        <MenuItem value="/images/Avatar0.png">Default</MenuItem>
                        <MenuItem value="/images/fox-male.png">Male</MenuItem>                        
                        <MenuItem value="/images/fox-female.png">Female</MenuItem>
                        <MenuItem value="/images/fox-rainbow.png">other</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  {/* Form fields */}
                  <Box m={2}>
                    <TextField
                      className="text-box custom-input-box"
                      id="name"
                      name="name"
                      label="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Box>

                  <Box m={2}>
                    <TextField
                      className="text-box custom-input-box"
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Box>

                  <Box m={2}>
                    <TextField
                      className="text-box custom-input-box"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                  </Box>

                  <Box m={2}>
                    <TextField
                      className="text-box custom-input-box"
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                      }
                      helperText={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      }
                    />
                  </Box>

                  {/* Button group */}
                  <Box m={2} className="custom-btn-group">
                    <Button
                      variant="contained"
                      style={cancelButtonStyles}
                      type="submit"
                      onClick={handleClosePopUp}
                    >
                      Cancel
                    </Button>

                    <Button
                      variant="contained"
                      type="submit"
                      onClick={formik.handleSubmit}
                      disabled={isDisabled}
                    >
                      Register
                    </Button>
                  </Box>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPopUp;
