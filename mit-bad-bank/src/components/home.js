// This is a React functional component for the Home page.

// Importing useState hook from React library
import { useState } from "react";

// Importing custom components
import AboutPopUp from "../popupwindows/about";
import RegisterPopUp from "../popupwindows/registration";

// Home component
const Home = () => {
  // State variable to control the display of the AboutPopUp
  const [isAboutPopUp, setIsAboutPopUp] = useState(false);

   // State variable to control the display of the RegisterPopUp (fix the variable name here)
   const [isRegisterPopUp, setIsRegiterPopUp] = useState(false);

  // Function to toggle the display of the AboutPopUp
  const toggleAboutPopUp = () => {
    setIsAboutPopUp(!isAboutPopUp);
  };

  const toggleRegisterPopUp = () => {
    setIsRegiterPopUp(!isRegisterPopUp);
  };
  // Custom styles for the card
  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  // JSX code for rendering the component
  return (
    <>
      {/* Card container */}
      <div className="card-container">
        <div className="card" style={customStyles}>
          <h5 className="card-title">Bad Bank</h5>
          <img src="/images/fox-in-suits.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Welcome to our "Bad Bank Application"! Where a clever fox securely safeguards your money - though he doesn't use it for nightly adventures!<br></br><br></br>
              Here, we're as cunning as the fox itself. Safety is our top priority, and our team is ready with a nose for finance to invest your money wisely and help it grow.<br></br>
              Ready for a fun and secure journey into the world of finance? Join the fox's "Bad Bank Application"!
            </p>
          </div>
        </div>
      </div>
      <br />

      {/* Button container */}
      <div className="card-container">
        <button onClick={toggleRegisterPopUp} className="btn btn-danger">
          Create Account
        </button>
        <button onClick={toggleAboutPopUp} className="btn btn-primary">
          How to use this App
        </button>
      </div>
      {/* Show the RegisterPopUp component if isRegisterPopUp is true */}
      {isRegisterPopUp && <RegisterPopUp handleClose={toggleRegisterPopUp} />}
      {/* Conditional rendering of AboutPopUp */}
      {isAboutPopUp && <AboutPopUp handleClose={toggleAboutPopUp} />}
    </>
  );
};

// Exporting the Home component as the default export
export default Home;
