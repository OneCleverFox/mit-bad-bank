// Import necessary modules
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

// Define the Layout component
const Layout = () => {
  // Custom styles for the container
  const customStyles = {
    paddingTop: "10px",
  };

  // Return the JS for the Layout component
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />

      {/* Render the main content container with custom styles */}
      <div className="container" style={customStyles}>
        {/* Render the child routes/components */}
        <Outlet />
      </div>
    </>
  );
};

// Export the Layout component for use in other files
export default Layout;
