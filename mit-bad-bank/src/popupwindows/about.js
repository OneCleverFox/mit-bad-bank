// Import required components from the Material-UI library
import { Button, Box } from "@mui/material";

// Define a functional component called AboutPopUp that takes a prop called handleClose
const AboutPopUp = ({ handleClose }) => {
  return (
    <>
      {/* Container for the popup box */}
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              {/* Heading for the popup */}
              <span className="">About this Application</span>
              <hr />
              <div>
                {/* Container for the content */}
                <Box m={2} className="custom-btn-group">
                  <div>
                    {/* Main content of the popup */}
                    <h2>How it works</h2>
                    <p>
                      {/* Explanation of the application */}
                      This application is all about creating a functional frontend for the prestigious M.I.T. (Massachusetts Institute of Technology) and presenting it. <br />
                      Specifically, certain functions have been provided, which are to be solved in this project for part 2 out of 3.
                      Below is a brief guide on how to use this app. Have fun! 
                      <br /> <br />
                      In this application, the main focus is on developing and presenting a functional frontend for the renowned Massachusetts Institute of Technology (M.I.T.).<br /> 
                      You will be provided with specific functions that need to be implemented as part of phase 2 out of the total 3 phases of this project. <br /> 
                      The application aims to provide an intuitive and user-friendly interface, ensuring a pleasant and efficient experience for the users. <br /> 
                      The frontend is intended to support M.I.T. in its diverse activities and tasks.
                      To use the app, please follow this brief guide:
                      <br /> <br />                      
                      
                    </p>

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
