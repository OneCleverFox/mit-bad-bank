// Import the 'useContext' hook from React, which allows us to access context values.
import { useContext } from "react";

// Import the 'UserContext' from the specified location.
import UserContext from "../data/usercontext";

// Define a custom hook called 'useUserContext'.
const useUserContext = () => {
  // Use the 'useContext' hook to access the 'UserContext' and return its value.
  return useContext(UserContext);
};

// Export the 'useUserContext' hook to make it available for other components.
export default useUserContext;
