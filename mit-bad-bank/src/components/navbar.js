// Import necessary dependencies and components
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import useUserContext from "../data/useContext";
import RegisterPopUp from "../popupwindows/registration";
import LoginPopUp from "../popupwindows/login";

// Define the Navbar component
const Navbar = () => {
  // State variables
  const [isRegisterPopUp, setIsRegiterPopUp] = useState(false);
  const [isLoginPopUp, setIsLoginPopUp] = useState(false);

  // Custom hook for user context
  const { loggedInUser, setLoggedInUser } = useUserContext();

  // Navigation function from react-router-dom
  const navigate = useNavigate();

  // Toggle state for the register popup
  const toggleRegisterPopUp = () => {
    setIsRegiterPopUp(!isRegisterPopUp);
  };

  // Toggle state for the login popup
  const toggleLoginPopUp = () => {
    setIsLoginPopUp(!isLoginPopUp);
  };

  // Handle logout
  const handleLogout = () => {
    setLoggedInUser(""); // Set the logged-in user to an empty string
    navigate("/"); // Navigate to the home page
  };

  // JS code for the Navbar component
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Link to the home page */}
          <Link to="/home" className="navbar-brand">
            Bad Bank
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* Link to the deposit page */}
                <Link to="/deposit" className="nav-link">
                  Deposit
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the withdraw page */}
                <Link to="/withdraw" className="nav-link">
                  Withdraw
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the allData page */}
                <Link to="/allData" className="nav-link">
                  All Data
                </Link>
              </li>
              {loggedInUser ? (
                // If the user is logged in, show My Account and Logout links
                <>
                  <li className="nav-item">
                    {/* Link to the user's account */}
                    <Link to="/myAccount" className="nav-link">
                      My Account
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* Logout button */}
                    <span onClick={handleLogout} className="nav-link clickable">
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                // If the user is not logged in, show Create Account and Login links
                <>
                  <li className="nav-item">
                    {/* Create Account button */}
                    <span
                      onClick={toggleRegisterPopUp}
                      className="nav-link clickable"
                    >
                      Create Account
                    </span>
                  </li>
                  <li className="nav-item">
                    {/* Login button */}
                    <span
                      onClick={toggleLoginPopUp}
                      className="nav-link clickable"
                    >
                      Login
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* Show the RegisterPopUp component if isRegisterPopUp is true */}
      {isRegisterPopUp && <RegisterPopUp handleClose={toggleRegisterPopUp} />}
      
      {/* Show the LoginPopUp component if isLoginPopUp is true */}
      {isLoginPopUp && <LoginPopUp handleClose={toggleLoginPopUp} />}
    </>
  );
};

export default Navbar;
