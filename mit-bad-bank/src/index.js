// Import necessary modules
import React from "react"; // Import the React library
import ReactDOM from "react-dom/client"; // Import the ReactDOM library (client-specific)

// Import CSS file
import "./index.css";

// Import the App component from the "App.js" file
import App from "./App";

// Import the UserProvider component from the "UserContext.js" file
import { UserProvider } from "./data/usercontext";

// Create a root element using ReactDOM.createRoot() and get the "root" element by its ID
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in React.StrictMode and UserProvider components
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
