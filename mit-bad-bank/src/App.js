import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Import necessary components (Home, Deposit, Withdraw, UserAccount, AllData) here
import Layout from "./components/layout";
import Home from "./components/home";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import UserAccount from "./components/useraccount";
import AllData from "./components/alldata";




function App() {
  return (
    <>
      {/* Wrap the entire app with BrowserRouter */}
      <BrowserRouter>
        {/* Define your routes using the Routes component */}
        <Routes>
          {/* Define the parent route with a common layout */}
          <Route path="/" element={<Layout />}>
            {/* Set up child routes */}
            {/* The "index" route for the root path */}
            <Route index element={<Home />} />

            {/* Additional routes */}
            <Route path="home" element={<Home />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="myAccount" element={<UserAccount />} />
            <Route path="allData" element={<AllData />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* Additional components can be placed here */}
      <div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
