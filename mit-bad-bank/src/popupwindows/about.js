// Import required components from the Material-UI library
import { Button, Box } from "@mui/material";
import { useEffect } from "react";
import "./about.css";


// Define a functional component called AboutPopUp that takes a prop called handleClose
const AboutPopUp = ({ handleClose }) => { 
    
  
    // Add an event listener when the component mounts
    useEffect(() => {
      // Function to handle the escape key press event
    const handleEscapeKeyPress = (event) => {
      if (event.keyCode === 27) {
        // 27 is the keyCode for the escape key
        handleClose();
      }
    };
      document.addEventListener("keydown", handleEscapeKeyPress);
      // Return a cleanup function to remove the event listener when the component unmounts
      return () => {
        document.removeEventListener("keydown", handleEscapeKeyPress);
      };
    }, 
    
    [handleClose]);



  return (
    <>
      {/* Container for the popup box */}
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              {/* Heading for the popup */}
              <span className=""></span>
              <hr />
              <div>
                {/* Container for the content */}
                <Box m={2} className="custom-btn-group">
                  <div>
                    {/* Main content of the popup */}
                    <h2>About</h2>
                    <p>
                      {/* Explanation of the application */}                      
                      In this application, the main focus is on developing and presenting a functional frontend for the renowned Massachusetts Institute of Technology (M.I.T.). 
                      You will be provided with specific functions that need to be implemented as part of phase 2 out of the total 3 phases of this project.
                      The application aims to provide an intuitive and user-friendly interface, ensuring a pleasant and efficient experience for the users.
                      The frontend is intended to support M.I.T. in its diverse activities and tasks.
                      To use the app, please follow this brief guide:
                      <br /> <br /> 
                      {/* Link to the GitHub repository */}
                      <div className ="video-links">
                    <h6>
                      <a href="https://www.youtube.com/watch?v=DIUVZHazDM4" target = "_blank" rel="noopener noreferrer">
                        Part 1: Video Instructions on Youtube
                      </a>
                    </h6>
                    <h6>
                      <a href="https://www.youtube.com/watch?v=DIUVZHazDM4&t=132s" target = "_blank" rel="noopener noreferrer">
                      Part 2: Challenges and Design Decisions Discussion
                      </a>
                    </h6>
                    <h6>
                      <a href="https://www.youtube.com/watch?v=DIUVZHazDM4&t=256s" target = "_blank" rel="noopener noreferrer">
                      Part 3: Discussion on creating form components and additional features
                      </a>
                    </h6> 
                    </div>                 
                    </p>
                                        
                      {/* Step 1: Create Account */}
                      <h5>Step 1: Create Account</h5>
                      To get started, click on the "Register" button and fill
                      in your name, email, password, and confirm the password.
                      Then, click on "Register" to create your account.
                      <br />
                      
                      {/* Step 2: Login */}
                      <h5>Step 2: Login with User Data</h5>
                      Once you have an account, click on the "Login" button and
                      enter your registered email and password. Click on
                      "Login" to access your account.
                      <br />
                      
                      {/* Step 3: Deposit Money */}
                      <h5>Step 3: Deposit Money</h5>
                      To deposit money into your account, go to the "My
                      Account" section and click on the "Deposit" button. Enter
                      the desired amount and click on "Deposit" to add money to
                      your balance.
                      <br />
                      
                      {/* Step 4: Withdraw Money */}
                      <h5>Step 4: Withdraw Money</h5>
                      To withdraw money from your account, go to the "My
                      Account" section and click on the "Withdraw" button.
                      Enter the desired amount and click on "Withdraw" to
                      subtract money from your balance.
                      <br />
                      
                      {/* Step 5: View Transactions */}
                      <h5>Step 5: View Transactions</h5>
                      To view your transaction history, go to the "My Account"
                      section and click on the "Transaction History" button.
                      You will see a list of all your past transactions.
                      <br />
                      
                      {/* Step 6: Logout */}
                      <h5>Step 6: Don't Forget to Logout</h5>
                      To logout, click on the "Logout" button in the "My
                      Account" section. Make sure to logout after you finish
                      using the app for security reasons.
                      <br />
                      <br />
                    

                    {/* Link to the GitHub repository */}
                    <h6>
                      <a href="https://github.com/OneCleverFox">
                        OneCleverFox@GitHub
                      </a>
                    </h6>
                  </div>
                </Box>

                {/* Container for the close button */}
                <Box m={2} className="custom-btn-group">
                  {/* Close button */}
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    Close
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



// Export the AboutPopUp component
export default AboutPopUp;
