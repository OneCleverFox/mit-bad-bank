// Import necessary modules from "react" library
import { createContext, useState } from "react";

// Import sample user data from "../data/user
import users from "./users";

// Create a new Context object named "UserContext" with an initial empty object as the default value
const UserContext = createContext({});

// Define and export a new component called "UserProvider" using the Context API
export const UserProvider = ({ children }) => {
  // Initialize state variables "user" and "loggedInUser" using the "useState" hook
  const [user, setUser] = useState(users); // The "user" state variable is initialized with the "users" data from above
  const [loggedInUser, setLoggedInUser] = useState(""); // The "loggedInUser" state variable is initialized with an empty string

  // The component returns the "UserContext.Provider" component, which wraps its children with the context provider
  return (
    <>
      <UserContext.Provider
        value={{ user, setUser, loggedInUser, setLoggedInUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

// Export the "UserContext" object
export default UserContext;
